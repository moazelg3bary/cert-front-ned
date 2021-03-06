import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  HostListener,
  OnDestroy,
} from "@angular/core";
import { Location } from "@angular/common";
import { ActivatedRoute, Router } from "@angular/router";
import { AuthService } from "src/app/services/auth.service";
import { CertificatesService } from "src/app/services/certificates.service";
import { NgxUiLoaderService } from "ngx-ui-loader";
import { Toaster } from "ngx-toast-notifications";
import { DomSanitizer } from "@angular/platform-browser";
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: "app-stepper",
  templateUrl: "./stepper.component.html",
  styleUrls: ["./stepper.component.scss"],
})
export class StepperComponent implements OnInit, OnDestroy {
  @ViewChild("rightPanel", { static: true }) rightPanel: ElementRef;

  myForm = new FormGroup({
    file: new FormControl("", [Validators.required]),
    fileSource: new FormControl("", [Validators.required]),
  });

  steps: any[] = [];
  currentStep: number = 3;
  owners: any[] = [{}];
  countries: any[] = [];
  cities: any[] = [];
  file: any;
  fileInfo: any = {};
  draftId: any = null;
  dontSave: boolean = false;
  files: any = {};
  allowedExt: any[] = ["png", "jpg", "jpeg"];
  typePayment = "credit";
  isOpenCollapse: string = "first";
  property_type: string | number = 0;
  owner_details: string | number = 0;
  owner_detailsValue: string = "individual";
  updateCertID: string | number;
  getSingaleCert: any;
  constructor(
    private location: Location,
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService,
    private certificatesService: CertificatesService,
    private loader: NgxUiLoaderService,
    private toast: Toaster,
    private sanitization: DomSanitizer
  ) {}

  test_1(e) {
    console.log('event' ,e)
    console.log(this.steps[0].fields);
  }
  ngOnInit() {
    this.loader.start();
    setTimeout(() => {
      this.loader.stop();
    }, 500);
    window.onbeforeunload = () => {
      alert("aa");
    };
    this.route.queryParamMap.subscribe((param: any) => {
      this.updateCertID = param.params["certId"];
      this.updateCertID ? (this.currentStep = 3) : "";
    });

    this.certificatesService
      .getCertificateById(this.updateCertID)
      .subscribe((res: any) => {
        this.getSingaleCert = res.data[0];
        console.log(this.getSingaleCert);
      });

    this.rightPanel.nativeElement.style.width = window.innerWidth - 480 + "px";
    this.getCountries();
    this.steps = [
      {
        number: 1,
        title: `Define your <br>
        Intellectual property`,
        desc: `What type of intellectual property is it? <br> Under which name shall it be registered?`,
        active: true,
        data: {
          types: [
            {
              id: 1,
              text: "Concept design/Artwork",
              image: "assets/img/generate/concept.svg",
              value: "concept",
              fields: [
                "(E.g. Branding, UI, illustration)",
                "Original concept design for a product or a machine",
              ],
            },
            {
              id: 2,
              text: "Original idea",
              image: "assets/img/generate/idea.svg",
              value: "idea",
              fields: ["Original idea of a project, product or business."],
            },
            {
              id: 3,
              text: "Research work/Code",
              image: "assets/img/generate/research.svg",
              value: "research",
              fields: [
                "Research papers published or about to get published.",
                "Code source for a product Or part of a product.",
              ],
            },
          ],
        },
        togglers: [
          { id: 1, name: "Property type", checked: false },
          { id: 2, name: "Property description" },
        ],
        activeToggler: 1,
        required: ["title", "title_ar", "description", "property_type"],
        fields: {},
      },
      {
        number: 2,
        title: `Upload file(s)`,
        desc: `Upload supporting <br> documents that include the detailed <br> description of the intellectual property.`,
        data: {},
        togglers: [{ id: 1, name: "Upload files" }],
        activeToggler: 1,
        required: [],
      },
      {
        number: 3,
        title: `Owner(s) details`,
        desc: `Fill in information <br> like your address, phone number <br> and current place of residence.`,
        data: {
          types: [
            {
              id: 1,
              text: "An individual (myself)",
              image: "assets/img/generate/individual.svg",
              value: "individual",
              fields: ["Country of residency", "Email address", "Phone number"],
            },
            {
              id: 2,
              text: "A registered company",
              image: "assets/img/generate/company.svg",
              value: "company",
              fields: [
                "Company VAT number",
                "Company address",
                "Contact person details",
              ],
            },
            {
              id: 3,
              text: "A group of owners",
              image: "assets/img/generate/group.svg",
              value: "group",
              fields: [
                "Country of residency",
                "Email address",
                "Phone number",
                "Nationality",
                "ID number",
              ],
            },
          ],
        },
        togglers: [
          { id: 1, name: "Owner(s) type" },
          { id: 2, name: "Owner(s) details" },
        ],
        activeToggler: 1,
        dynamicRequired: {
          individual: {
            recursive: false,
            fields: [
              "full_name",
              "full_name_ar",
              "id_number",
              "email",
              "phone_number",
              "country_of_residency",
              "nationality",
            ],
          },
          company: {
            recursive: false,
            fields: [
              "company_name",
              "company_country",
              "company_city",
              "zip_code",
              "vat",
              "name",
              "nationality",
              "id_number",
              "country_of_residency",
              "email",
              "phone_number",
            ],
          },
          group: {
            recursive: true,
            fields: [
              "name",
              "id_number",
              "country_of_residency",
              "nationality",
            ],
          },
        },
        fieldsToCheckForDynamic: "owner_type",
        nestedFieldName: "data",
        required: ["owner_type"],
        fields: { owner_type: null },
      },
      {
        number: 4,
        title: `Payment`,
        desc: `Review your application <br> and finalise payment with the option <br> to have a hard copy delivered <br> at your doorstep.`,
        data: {},
        togglers: [
          { id: 1, name: "Review" },
          { id: 2, name: "Payment" },
        ],
        activeToggler: 1,
        required: [],
      },
    ];
    this.checkDraft();
  }

  isOpen(e) {
    this.isOpenCollapse = e;
  }

  checkDraft() {
    this.route.params.subscribe((params) => {
      this.draftId = params["draftId"];
      if (this.draftId) {
        let draft = this.certificatesService.getDraftById(params["draftId"]);
        this.steps = draft.steps;
        this.currentStep = draft.currentStep;
      }
    });
  }

  // @HostListener('window:beforeunload', ['$event'])
  // unloadNotification($event: any) {
  //   this.saveDraft();
  // }

  ngOnDestroy() {
    if (this.dontSave) return;
    this.saveDraft();
  }

  saveDraft() {
    this.certificatesService.saveDraft(
      this.steps,
      this.currentStep,
      this.draftId
    );
  }

  fileSelected(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.myForm.patchValue({
        fileSource: file,
      });
      console.log(file);
      const formData = new FormData();
      formData.append("file", this.myForm.get("fileSource").value);
      this.certificatesService
        .uploadLogo({ logo: formData, id: 12 })
        .subscribe((res: any) => {
          console.log(res);
        });
    }
  }

  companyLogoSelected(event) {
    if (!this.allowedExt.includes(event[0].name.split(".").pop())) return;
    let file = event.item(0);

    let data = new FormData();
    data.append("file", file, file.name);

    let self = this;
    var reader = new FileReader();
    reader.onload = function () {
      self.files.companyLogo_background = self.sanitization.bypassSecurityTrustStyle(
        `url(${reader.result})`
      );
      self.files.companyLogo_image = reader.result;
      console.log(reader);
    };
    reader.readAsDataURL(file);
    this.certificatesService.uploadLogo(data).subscribe(
      (res: any) => {
        console.log(res);
      },
      (err) => {
        console.log(err);
      }
    );
  }

  formatBytes(bytes, decimals = 2) {
    if (bytes === 0) return "0 Bytes";

    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];

    const i = Math.floor(Math.log(bytes) / Math.log(k));

    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i];
  }

  getCountries() {
    this.authService.getCountries(true).subscribe((res: any) => {
      this.countries = res;
    });
  }

  setWidth(el) {}

  checkDisabled() {
    let disabled = false;
    let step = this.steps[this.currentStep - 1];
    let fields = step.required;
    disabled = this.checkFields(fields, step.fields);
    if (step.dynamicRequired && step.fields[step.fieldsToCheckForDynamic]) {
      let required =
        step.dynamicRequired[step.fields[step.fieldsToCheckForDynamic]];
      fields = required.fields;
      if (required.recursive) {
        step.fields[step.nestedFieldName].map((data) => {
          if (this.checkFields(fields, data)) {
            disabled = true;
          }
        });
      } else {
        disabled = this.checkFields(fields, step.fields[step.nestedFieldName]);
      }
    }
    return disabled;
  }

  checkFields(arrOfFields, data) {
    let disabled = false;
    arrOfFields.map((f) => {
      if (!data[f]) disabled = true;
    });
    return disabled;
  }

  propertyType(index: string | number) {
    this.property_type = index;
  }

  ownerDetails(index: string | number, value: string) {
    this.owner_details = index;
    this.owner_detailsValue = value;
  }

  setter(
    field,
    value,
    toggler = null,
    clearFields: any[] = [],
    fieldValue = {}
  ) {
    this.steps[this.currentStep - 1].fields[field] = value;
    if (toggler) this.steps[this.currentStep - 1].activeToggler = toggler;
    if (clearFields.length > 0) {
      clearFields.map((field) => {
        this.steps[this.currentStep - 1].fields[field] = fieldValue;
      });
    }
  }

  nextStep(e: any) {
    e.preventDefault();
    // return;
    if (this.currentStep == this.steps.length) {
      this.submit();
      return;
    }
    this.currentStep++;
  }

  submit() {
    this.loader.start();
    let data = {};
    this.steps.map((step) => {
      data = { ...data, ...step.fields };
    });
    if (this.updateCertID) {
      this.certificatesService
        .updateCertificate(this.updateCertID, data)
        .subscribe((res) => console.log(res));
    } else {
      this.certificatesService.newCertificate(data).subscribe(
        (res: any) => {
          if (this.draftId)
            this.certificatesService.deleteDraftById(this.draftId);
          this.router.navigate(["dashboard/done"]);
          this.loader.stop();
          this.dontSave = true;
        },
        (err) => {
          this.loader.stop();
          this.toast.open({
            text: "Make sure you fill all the fields.",
            type: "danger",
          });
        }
      );
    }
  }

  back() {
    if (this.currentStep == 1) {
      this.location.back();
      return;
    }
    if (this.currentStep == 3) {
      if (this.steps[2].data.selectedType) {
        this.steps[2].data.selectedType = null;
        return;
      }
    }
    this.currentStep--;
  }
}
