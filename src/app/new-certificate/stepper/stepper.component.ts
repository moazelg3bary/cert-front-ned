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

@Component({
  selector: "app-stepper",
  templateUrl: "./stepper.component.html",
  styleUrls: ["./stepper.component.scss"],
})
export class StepperComponent implements OnInit, OnDestroy {
  @ViewChild("rightPanel", { static: true }) rightPanel: ElementRef;

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

  ngOnInit() {
    this.loader.start();
    setTimeout(() => {
      this.loader.stop();
    }, 500);
    window.onbeforeunload = () => {
      alert("aa");
    };
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
    // if (this.allowedExt.includes(event[0].name.split('.').pop())) {
    this.file = event.item(0);
    this.fileInfo = {
      size: this.formatBytes(this.file.size),
      type: this.file.name.split(".").pop(),
    };
    let data = new FormData();
    data.append("file", this.file, this.file.name);
    // this.certificatesService.upload(data).subscribe((res: any) => {
    // });
    // let self = this;
    // var reader = new FileReader();
    // reader.onload = function () {
    //   self.avatar_background = self.sanitization.bypassSecurityTrustStyle(`url(${reader.result})`);
    //   self.avatar = reader.result;
    // };
    // reader.readAsDataURL(this.files);
    // }
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
