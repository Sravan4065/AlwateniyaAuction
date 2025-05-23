define({ 

  //Type your controller code here 
  onNavigate: function(){
    this.view.preShow = this.onPreShow;
    this.view.btnSaveAndContinue.skin = "sknbtnBG61B35CRoundedBorder61B35C1pxFontDubaiRegffffffSize45px";
    this.view.flxToggle2.skin = "sknflxBGFF7171Opacity50perPlainBorderFF71711px";
    this.view.flxBarSellerOrBuyer.skin = "sknflxBGDFDFDFRoundedBorderDFDFDF1px";
    this.view.flxBarEmail.skin ="sknflxBGDFDFDFRoundedBorderDFDFDF1px";
    this.view.flxEmailVerificationCodeBar.skin = "sknflxBGDFDFDFRoundedBorderDFDFDF1px";
    this.view.flxBarMobile.skin = "sknflxBGDFDFDFRoundedBorderDFDFDF1px";
    this.view.flxBarMobileOtp.skin = "sknflxBGDFDFDFRoundedBorderDFDFDF1px";
    this.view.flxBarUserName.skin = "sknflxBGDFDFDFRoundedBorderDFDFDF1px";
    this.view.flxBarPassConfo.skin = "sknflxBGDFDFDFRoundedBorderDFDFDF1px";
    //     this.view.btnTradeSaveAndContinue.skin = "sknbtnBG61B35CRoundedBorder61B35C1pxFontDubaiRegffffffSize45px";
    //    this.view.btnSaveAndContinueForTermsNConditions.skin = "sknbtnBG61B35CRoundedBorder61B35C1pxFontDubaiRegffffffSize45px";
    this.view.flx2.onClick = this.PopupVisibilityAction; 
    this.view.flxClosePopup.onClick = this.ClosePopupOnClick;
    this.view.btnSaveAndContinue.onClick = this.btnSaveAndContinueSellerOrBuyeronClickAction;
    this.view.flxFooter.onClick = this.nextOnclick;
    this.view.HeaderRegister.imgBack.onTouchEnd = this.BackNavigation.bind(this,"sellerOrBuyer");
    this.view.HeaderRegisterForEmail.imgBack.onTouchEnd = this.BackNavigation.bind(this,"emailBack");
    this.view.HeaderRegisterForCompany.imgBack.onTouchEnd = this.BackNavigation.bind(this, "companyBack");
    this.view.HeaderRegisterForTradeLicense.flxBack.onClick = this.BackNavigation.bind(this,"tradeLicense");
    this.view.HeaderRegisterForTradeLicenseExpiryDate.flxBack.onClick = this.BackNavigation(this,"tradeLicenseExpiryDate");
   this.view.HeaderRegisterForTaxRegistrationNumber.flxBack.onClick = this.BackNavigation(this,"taxRegistrationNumber");
    this.view.HeaderRegisterForVerificationCode.imgBack.onTouchEnd = this.BackNavigation.bind(this,"emailVerificationCode");
    this.view.HeaderRegisterMobileContainer.imgBack.onTouchEnd = this.BackNavigation.bind(this,"mobileBack");
    this.view.HeaderRegisterMobileOTP.imgBack.onTouchEnd = this.BackNavigation.bind(this,"mobileotpback");
    this.view.HeaderRegister2.imgBack.onTouchEnd = this.BackNavigation.bind(this,"termsAndCondBack");
    this.view.HeaderRegister3.imgBack.onTouchEnd = this.BackNavigation.bind(this,"usernameBack");
    this.view.HeaderRegister1.imgBack.onTouchEnd = this.BackNavigation.bind(this,"passwordback");
    this.view.HeaderRegisterConfirmPassword.flxBack.onClick = this.BackNavigation.bind(this,"confirmPassBack");
    this.view.radiobtnSeller.onSelection = this.radiobtnSellerOnSelectionAction;
    this.view.radiobtnBuyer.onSelection = this.radiobtnbuyerOnSelectionAction;
    this.view.radioBtnWithTrade.onSelection = this.radioBtnWithTradeOnSelectionAction;
    this.view.radioBtnWithoutTrade.onSelection = this.radioBtnWithoutTradeOnelectionAction;
    this.view.btnTradeSaveAndContinue.onClick=this.btnTradeSaveAandContinueOnclickAction;
    this.view.flxSellerRegisterPopupClose.onClick = this.flxSellerRegisterPopupCloseOnClickAction;
    //     this.view.flxWithoutUAE.onClick = this.flxWithoutUAEOnClickAction;
    this.view.flxCompanyFooter.onClick = this.flxCompanyFooterOnClickAction;
    this.view.flxTradeLicenseFooter.onClick = this.flxTradeLicenseFooterOnClickAction;
    this.view.tbxCompanyAddress.onTextChange = this.tbxCompanyAddressOnTextChangeAction;
    this.view.tbxTradeLicenseNumber.onTextChange = this.tbxTradeLicenseNumberOnTextChangeAction;
    this.view.calendarTradeLicenseExpiryDate.onSelection = this.calendarTradeLicenseExpiryDateOnSelectionAction;
    this.view.tbxTaxRegistrationNumber.onTextChange = this.tbxTaxRegistrationNumberOnTextChangeAction;
    this.view.flxTradeLicenseExpiryDateFooter.onClick = this.flxTradeLicenseExpiryDateFooterOnClickAction;
    this.view.flxTaxRegistrationNumberFooter.onClick = this.flxTaxRegistrationNumberFooterOnClickAction;
    this.view.tbxEmailAddress.onTextChange = this.tbxEmailAddressOnTextChangeAction;
    this.view.flxEmailFooter.onClick= this.imgNextInEmailonTouchEndAction;
    this.view.imgNextInMobileVerification.onTouchEnd = this.imgNextInMobileVerificationOnTouchEndAction ;
    this.view.flxResendCode.onClick = this.flxResendCodeOnClickAction;
    this.view.tbxPhoneNumber.onTextChange = this.tbxPhoneNumberonTextChangeAction;
    this.view.flxCountryCode.onClick = this.flxCountryCodeOnClickAction;
    this.view.flxCountrycodeClosePopup.onClick = this.flxCountrycodeClosePopupOnClickAction;
    this.view.segCountryCodes.onRowClick = this.segCountryCodesOnRowClickAction;
    this.view.flxImgBack.onClick = this.flxImgBackOnClickAction;
    this.view.tbxSearchCountryCode.onTextChange = this.tbxSearchCountryCodeOnTextChangeAction.bind(this);
    this.view.flxResendOTPCode.onClick = this.flxResendOTPCodeOnClickAction;
    this.view.flxOtpVerificationFooter.onClick = this.flxNextInOTPVerificationOnTouchEndAction;
    this.view.tbxUserName.onTextChange = this.tbxUserNameOnTextChangeAction;
    this.view.flxUserNameFooter.onClick = this.flxNextUserNameOnTouchEndAction;
    this.view.flxEmailVerificationFooter.onClick= this.flxNextInEmailVerificationOnTouchEndAction;
    this.view.tbxPassWordName.onTextChange = this.tbxPassWordNameOnTextChangeAction;
    this.view.tbxConfirmPassWord.onTextChange = this.tbxConfirmPassWordOnTextChangeAction;
    this.view.flxPasswordFooter.onClick = this.flxPasswordFooterOnClickAction;
    this.view.flxEyeIconPass.onClick = this.flxEyeIconPassOnClickAction;
    this.view.flxEyeIconConfirmPass.onClick = this.flxEyeIconConfirmPassOnClickAction;
    //     this.view.btnPassWordAndConfirmPassword.onClick = this.btnPassWordAndConfirmPasswordOnClickAction;
    this.view.lblUploadSignedDocs.onTouchEnd = this.lblUploadSignedDocsOnTouchEndAction;
    this.view.lblDownloadTermsAndConditions.onTouchEnd = this.lblDownloadTermsAndConditionsOnTouchEndAction;
    this.view.btnUploadYourDoc.onClick = this.btnUploadYourDocOnClickAction;
    this.view.chxIhaveReadTermsNConds.onSelection = this.chxIhaveReadTermsNCondOnSelectionAction;
    this.view.btnSaveAndContinueForTermsNConditions.onClick = this.btnSaveAndContinueForTermsNConditionsOnClickAction;
    this.view.imgClose.onTouchEnd = this.btnSaveAndContinueSellerOnClickAction;
    this.view.btnSaveAndContinueSeller.onClick=this.btnSaveAndContinueSellerOnClickAction;
    this.view.btnSaveAndContinueBuyer.onClick = this.btnSaveAndContinueBuyerOnClick;

  },
  onPreShow: function(){
    var self = this;
    if ((this.getPreviousForm() === "frmRegister1") && this.navigationContext && this.navigationContext._meta_ && (this.navigationContext._meta_.widgetId === "flxNext") && (this.navigationContext._meta_.eventName === "onClick")) {
      self.view.lblUserFullName.text = this.navigationContext.txtFirstNlastName_text;

    }
  },

  BackNavigation: function (type){
    switch  (type){
      case "sellerOrBuyer"     : 
        {
          if(this.view.lblSellerOrBuyer.text === ""){
            //                                    alert(this.view.lblSellerOrBuyer.text);
            var ntf =new voltmx.mvc.Navigation("frmRegister1");
            ntf.navigate();
          }
          else{
            this.view.lblSellerOrBuyer.text = "";
            //                                     alert(this.view.lblSellerOrBuyer.text);
            this.view.flx2.setEnabled(true);
            this.view.radiobtnBuyer.selectedKey =null;
            this.view.flxFooter.setVisibility(false);
            this.view.flxInnerBarSellerOrBuyer.width="10%";
            this.view.radiobtnSeller.selectedKey = null;
          }
        }
        break;
      case "emailBack"          : {
        if(this.view.tbxEmailAddress.text === ""){
          var trade = voltmx.store.getItem("trade");
          this.view.flxEmailContainer.setVisibility(false);
          if(trade === "WithTrade"){
            this.view.flxTaxRegistrationNumber.setVisibility(true);
          }
          else{
            this.view.flxSellerOrBuyerMain.setVisibility(true);
            //                                     this.view.flxSellerRegIndiFooterBody.setVisibility(true);
            this.view.radioBtnWithoutTrade.selectedKey = null;
            this.view.radioBtnWithTrade.selectedKey = null;
            voltmx.store.setItem("is_org", false);
          }
        }
        else{
          this.view.tbxEmailAddress.text = "";
          this.view.lblEmailError.text ="";
          this.view.flxEmailFooter.setVisibility(false);
          this.view.flxInnerBarEmail.width ="30%";
        }

      }
        break;
      case "emailVerificationCode": {
        this.view.flxEmailVerificationCode.setVisibility(false);
this.view.flxEmail.setVisibility(true);
this.view.HeaderRegisterForEmail.setVisibility(true);
        this.view.flxEmailContainer.setVisibility(true);
      }
        break;
      case "mobileBack"          : {
        if(this.view.tbxPhoneNumber.text === ""){
          this.view.flxEmailVerificationCode.setVisibility(true);
          this.view.flxMobileContainer.setVisibility(false);
//           this.startOTPTimerForMobile();
        }
        else{
          this.view.tbxPhoneNumber.text = "";
          this.view.lblMobileError.text ="";
          this.view.flxMobileFooter.setVisibility(false);

        }

      }
        break;
      case "mobileotpback"       : {
        this.view.flxMobileContainer.setVisibility(true);
        this.view.flxMobileVerifyAndOTPCode.setVisibility(false);
      }
        break;
      case "termsAndCondBack"    : {
        this.view.flxTermsAndConditions.setVisibility(false);
        this.view.flxPassWord.setVisibility(true);
      }
        break;
      case "usernameBack"        : {
        if(this.view.tbxUserName.text===""){
          this.view.flxMobileVerifyAndOTPCode.setVisibility(true);
          this.view.flxUserName.setVisibility(false);
        }
        else{
          this.view.tbxUserName.text="";
          this.view.lblUserNameError.text ="";
          this.view.flxInnerBarUserName.width = "61%";
        }
      }
        break;
      case  "passwordback"        : {
        if(this.view.tbxPassWordName.text === "" ){
          this.view.flxPassWord.setVisibility(false);
          this.view.flxUserName.setVisibility(true);
        }
        else {
          this.view.tbxPassWordName.text = "";
          this.view.flxPasswordFooter.setVisibility(false);
          this.view.flxPassWordError.setVisibility(false);
        }
  
      }
        break;
      case "confirmPassBack"  :  {
        if(this.view.tbxConfirmPassWord.text === ""){
          this.view.flxPassWord.setVisibility(true);
          this.view.flxConfirmPasswordContainer.setVisibility(false);
//           this.view.flxUserName.setVisibility(false);
//           this.view.flxSellerOrBuyerMain.setVisibility(false);
        }
        else{
          this.view.tbxConfirmPassWord.text = "";
          this.view.chxIhaveReadTermsNConds.selectedKeys === null;
          this.view.flxConfirmPasswordError.setVisibility(false);

        }
      }
      case "companyBack"        : {
        if(this.view.tbxCompanyAddress.text === ""){
          this.view.flxSellerOrBuyerMain.setVisibility(true);
          this.view.flxCompanyName.setVisibility(false);
        }
        else{
          this.view.tbxCompanyAddress.text = "";
          this.view.flxCompanyFooter.setVisibility(false);

        }
      }
        break;
      case "tradeLicense"      : {
        if(this.view.tbxTradeLicenseNumber.text === ""){
          this.view.flxCompanyName.setVisibility(true);
          this.view.flxTradeLicense.setVisibility(false);
        }
        else{
          this.view.tbxTradeLicenseNumber.text = "";
          this.view.flxTradeLicenseFooter.setVisibility(false);
        }
      }
        break;
      case "tradeLicenseExpiryDate":    {
        var selectedDate = this.view.calendarTradeLicenseExpiryDate.date;

        if (!selectedDate) {
          // No date selected - show validation message
          this.view.flxTradeLicense.setVisibility(true);
          this.view.flxTradeLicenseExpiryDate.setVisibility(false);
        } else {
          // Clear the selected date and hide footer
          this.view.calendarTradeLicenseExpiryDate.date = null;
          this.view.flxTradeLicenseExpiryDateFooter.setVisibility(false);
        }
      }
        break;

      case "taxRegistrationNumber":   {
        if(this.view.tbxTaxRegistrationNumber.text === ""){
          this.view.flxTradeLicenseExpiryDate.setVisibility(true);
          this.view.flxTaxRegistrationNumber.setVisibility(false);
        }
        else{
          this.view.tbxTaxRegistrationNumber.text = "";
          this.view.flxTaxRegistrationNumberFooter.setVisibility(false);
        }
      }
    }
  },
  //Buyer or seller (radio buttons) popup visibility on action!!! 
  PopupVisibilityAction: function(){
    this.view.flxPopupSellerOrBuyer.setVisibility(true);
    this.view.flxPopupFromFooter.bottom = "-3%";
  },
  //Buyer or seller (radio buttons) popup visibility off action!!! 
  ClosePopupOnClick: function(){
    this.view.flxPopupSellerOrBuyer.setVisibility(false);
    this.view.flxPopupFromFooter.bottom = "-45%";
  },

  btnSaveAndContinueSellerOrBuyeronClickAction: function() {
    var selectedKerForSeller = this.view.radiobtnSeller.selectedKey;
    var selectedKeyValueForSeller = this.view.radiobtnSeller.selectedKeyValue;
    var selectedKeyForBuyer = this.view.radiobtnBuyer.selectedKey;
    var selectedKeyValueForBuyer = this.view.radiobtnBuyer.selectedKeyValue;

    var setUserName = voltmx.store.setItem("userName", this.view.lblUserFullName.text);
    var gettedUserName = voltmx.store.getItem("userName");

    // Hiding the Popup and Footer
    this.view.flxPopupSellerOrBuyer.setVisibility(false);
    this.view.flxPopupFromFooter.bottom = "-45%";
    this.view.lblSellerRegister.text = this.view.lblSellerRegister.text +" "+"Registration"

    // Handling cases when no selection is made
    if (!selectedKerForSeller && !selectedKeyForBuyer) {
      this.view.btnSaveAndContinue.setEnabled(false);
      this.view.flxInnerBarSellerOrBuyer.width="10%";
      alert("Select Any Type!!");
      return;
    } else {
      // Re-enable button if a valid selection is made
      this.view.btnSaveAndContinue.setEnabled(true);
      this.view.flxInnerBarSellerOrBuyer.width="21%";
      // Updating labels based on selected value
      if (!selectedKerForSeller) {
        this.view.lblSellerOrBuyer.text = selectedKeyForBuyer;
        this.view.lblSellerRegister.text = selectedKeyForBuyer;
      } else {
        this.view.lblSellerOrBuyer.text = selectedKerForSeller;
        this.view.lblSellerRegister.text = selectedKerForSeller;
      }

      // Handle footer visibility
      if (this.view.lblSellerOrBuyer.text === "") {
        this.view.flxFooter.setVisibility(false);
      } else {
        this.view.flxFooter.setVisibility(true);

        // Store the user type
        var lblSellerOrBuyer = this.view.lblSellerOrBuyer.text;
        var setedUserType = voltmx.store.setItem("userType", lblSellerOrBuyer);
        var getedUserType = voltmx.store.getItem("userType");
      }
    }
  },

  //next onclick action after selecting seller or buyer!!!!
  nextOnclick: function(){
    this.view.flxPopupTrade.setVisibility(true);
    this.view.flxPopupRegister.bottom="-3%";
    this.view.flxPopupSellerOrBuyer.setVisibility(false);
    if(this.view.lblSellerRegister.text ===this.view.lblSellerOrBuyer.text ){
      this.view.lblSellerRegister.text =  this.view.lblSellerRegister.text +" "+"Registration";
    }


  },
  //radio button buyer on Selection Action !!!!!!!!
  radiobtnbuyerOnSelectionAction: function(){
    if(this.view.radiobtnBuyer.selectedKey === null){
      this.view.radiobtnSeller.selectedKey = "Seller";
    }
    else{
      this.view.radiobtnSeller.selectedKey = null;
      this.view.btnSaveAndContinue.setEnabled(true); 
    }
  },
  //radio button seller on Selection Action!!!!!!!
  radiobtnSellerOnSelectionAction: function(){
    if(this.view.radiobtnSeller.selectedKey === null){
      this.view.radiobtnBuyer.selectedKey = "Buyer";
    }
    else{
      this.view.radiobtnBuyer.selectedKey =null;
      this.view.btnSaveAndContinue.setEnabled(true); 
    }
  },
  //radio button Without Trade OnSelection Action!!!!!!
  radioBtnWithoutTradeOnelectionAction: function(){
    if(this.view.radioBtnWithoutTrade.selectedKey === null){
      this.view.radioBtnWithTrade.selectedKey = "WithTrade";
    }
    else{

      this.view.radioBtnWithTrade.selectedKey =null;
    }
  },
  //radio button With Trade OnSelection Action!!!!!!!!
  radioBtnWithTradeOnSelectionAction: function(){
    if( this.view.radioBtnWithTrade.selectedKey === null){
      this.view.btnTradeSaveAndContinue.setEnabled(false);
      this.view.radioBtnWithoutTrade.selectedKey = "WithoutTrade";

    }
    else{

      this.view.btnTradeSaveAndContinue.setEnabled(true);
      this.view.radioBtnWithoutTrade.selectedKey =null;
    }
  },

  btnTradeSaveAandContinueOnclickAction: function () {
    var selectedWithoutTrade = this.view.radioBtnWithoutTrade.selectedKey;
    var selectedWithTrade = this.view.radioBtnWithTrade.selectedKey;

    // If neither radio is selected
    if (!selectedWithoutTrade && !selectedWithTrade) {
      alert("Please select a trade type.");
      this.view.flxEmailContainer.setVisibility(false);
      return;
    }

    // Save whichever is selected (only one should be selected)
    if (selectedWithTrade) {
      voltmx.store.setItem("trade", selectedWithTrade);
      voltmx.store.setItem("is_org", true);
    } else if (selectedWithoutTrade) {
      voltmx.store.setItem("is_org", false);
      voltmx.store.setItem("trade", selectedWithoutTrade);
    }

    var trade = voltmx.store.getItem("trade");
    if(trade === "WithTrade"){
      //With Trade!!!
      this.view.flxSellerOrBuyerMain.setVisibility(false);
      this.view.flxCompanyName.setVisibility(true);
      this.view.flxPopupTrade.setVisibility(false);
      voltmx.store.setItem("isEmailVerified", false);
    }
    else{
      //Without Trade!!!!
      voltmx.store.setItem("isEmailVerified", false);
      this.view.flxEmailFooter.setVisibility(false);
      this.view.flxPopupTrade.setVisibility(false);
      this.view.flxSellerOrBuyerMain.setVisibility(false);
      this.view.flxEmailContainer.setVisibility(true);
    }
    // Show next screen

  },
  //Registration Individual for seller/buyer Pop Up visible onClick action!!!!!
  flxSellerRegIndividualCloseonClickAction: function(){
    //     this.view.flxPopupTradeForIndividual.setVisibility(false);
    this.view.flxFooterPopupSellerRegistrationForIndividual.bottom="-45%";
  },
  //Registration Individual for seller/buyer Pop Upunvisible onClick action!!!!
  flxSellerRegisterPopupCloseOnClickAction: function(){
    this.view.flxPopupTrade.setVisibility(false);
    this.view.flxPopupRegister.bottom= "-45%";
    this.view.flxPopupFromFooter.bottom= "-3%";
    this.view.flxPopupSellerOrBuyer.setVisibility(true);
    //      this.view.radiobtnBuyer.selectedKey =null;
    //     this.view.radiobtnSeller.selectedKey === null;

    this.view.flxFooter.setVisibility(true);
    this.view.flxPopupFromFooter.bottom="-45%";
    this.view.flxPopupSellerOrBuyer.setVisibility(false);
    this.view.flx2.setEnabled(false);


  },
  //Continue action after Selectin vth/vthout trade radio btns navigate to email!!
//   flxWithoutUAEOnClickAction: function(){
//     this.view.flxEmailContainer.setVisibility(true);
//     this.view.HeaderRegister.imgBack.setVisibility(true);
//     this.view.flxSellerRegIndiFooterBody.setVisibility(false);
//     this.view.flxFooterPopupSellerRegistrationForIndividual.bottom ="-3";
//     //     this.view.flxPopupTradeForIndividual.setVisibility(false);
// //     this.view.HeaderRegisterForEmail.setVisibility(true);
//     this.view.flxSellerOrBuyerMain.setVisibility(false);
//     this.view.flxFooter.setVisibility(false);
//     this.view.flxPopupRegister.bottom="=55%";
//     this.view.flxPopupTrade.setVisibility(false);
//   },

  flxCompanyFooterOnClickAction: function(){
    this.view.flxTradeLicense.setVisibility(true);
    this.view.flxCompanyName.setVisibility(false);

  },
  flxTradeLicenseFooterOnClickAction: function(){

    this.view.flxTradeLicense.setVisibility(false);
    this.view.flxTradeLicenseExpiryDate.setVisibility(true);

  },

  tbxCompanyAddressOnTextChangeAction: function(){

    var pattern =  /^[A-Za-z0-9 ]+$/;
    var companyName = this.view.tbxCompanyAddress.text;
    if(!companyName.match(pattern))
    {
      this.view.flxCompanyFooter.setVisibility(false);
      this.view.flxCompanyError.setVisibility(true);
      this.view.lblCompanyError.text = "Enter valid Company Name"; 
    }
    else{
      this.view.flxCompanyFooter.setVisibility(true);
      this.view.flxCompanyError.setVisibility(false);
    }
  },
  tbxTradeLicenseNumberOnTextChangeAction: function(){

    var pattern =  /^[A-Za-z0-9 ]+$/;
    var TradeLicenseNumber = this.view.tbxTradeLicenseNumber.text;
    if(!TradeLicenseNumber.match(pattern))
    {
      this.view.flxTradeLicenseFooter.setVisibility(false);
      this.view.flxTradeLicenseError.setVisibility(true);
      this.view.lblTradeLicenseError.text = "Enter valid Trade License Number"; 
    }
    else{
      this.view.flxTradeLicenseFooter.setVisibility(true);
      this.view.flxTradeLicenseError.setVisibility(false);
    }

  },
  calendarTradeLicenseExpiryDateOnSelectionAction: function(){

    this.view.flxTradeLicenseExpiryDateFooter.setVisibility(true);
  },
  tbxTaxRegistrationNumberOnTextChangeAction: function(){
    this.view.flxTaxRegistrationNumberFooter.setVisibility(true);
  },
  flxTradeLicenseExpiryDateFooterOnClickAction: function(){
    this.view.flxTradeLicenseExpiryDate.setVisibility(false);
    this.view.flxTaxRegistrationNumber.setVisibility(true);
  },

  flxTaxRegistrationNumberFooterOnClickAction: function(){
    this.view.flxEmailContainer.setVisibility(true);
    this.view.flxTaxRegistrationNumber.setVisibility(false);
  },

  tbxEmailAddressOnTextChangeAction: function() {
    var emailText = this.view.tbxEmailAddress.text;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Early exit for empty field
    if (!emailText || emailText.trim() === "") {
      this.view.lblEmailError.text = "Email Required!!";
      this.view.flxEmailFooter.setVisibility(false);
      return;
    }

    const atIndex = emailText.indexOf("@");

    // Custom checks
    const hasConsecutiveDots = emailText.includes("..");
    const startsOrEndsWithDot = emailText.startsWith(".") || emailText.endsWith(".");
    const dotNearAt = (atIndex > 0 && emailText[atIndex - 1] === ".") || (emailText[atIndex + 1] === ".");

    // Validate email structure + extra rules
    if (
      !emailRegex.test(emailText) ||
      hasConsecutiveDots ||
      startsOrEndsWithDot ||
      dotNearAt
    ) {
      this.view.lblEmailError.text = "Enter Valid Email";
      this.view.flxEmailFooter.setVisibility(false);
      this.view.flxInnerBarEmail.width= "30%";
    } else {
      this.view.lblEmailError.text = "";
      this.view.flxEmailFooter.setVisibility(true);
      this.view.flxInnerBarEmail.width= "40%";
    }
  },

  //Email validation Service call and calling sendEmail Otp Function !!!!!!!!
  imgNextInEmailonTouchEndAction: async function() {
    var self = this;
    var isEmailVerified = voltmx.store.getItem("isEmailVerified");
    if(isEmailVerified === false){
    voltmx.application.showLoadingScreen();
    var pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (self.view.tbxEmailAddress.text !== null && self.view.tbxEmailAddress.text.match(pattern)) {
      var verification_type = "email";
      var url = "https://dev-hcltx.et.ae:443/services/ms_user_reg/check-user-attribute";
      try {
        // Create HTTP request for email validation
        var request = new voltmx.net.HttpRequest();
        request.open("POST", url);
        var username = "aaf23ca6180cfacbd5c4ea23c5faa2dd";
        var password = "43f644c5a1bea3169a10586ef47807bc";
        var credentials = username + ":" + password;
        //         var encodedValue = this.encodeToBase64(credentials);  
        // Set headers
        // request.setRequestHeader("Authorization", "Basic " + encodedValue);
        request.setRequestHeader("Content-Type", "application/json");
        request.setRequestHeader("Accept", "application/json");
        // Handle the response
        request.onReadyStateChange = async function() {
          if (request.readyState === 4) {
            if (request.status === 200) {
              // alert("✅ Success from email check: " + request.responseText);
              //               voltmx.application.dismissLoadingScreen();
              var requestStringEmail = request.responseText;
              var requestJSONEmail = JSON.parse(requestStringEmail);
              voltmx.print("requestJSON from validate email: " + requestJSONEmail);
              //   alert("opstatus: " + requestJSONEmail.opstatus);
              var opstatusRes = requestJSONEmail.opstatus;
              if (opstatusRes === 0 ){
                if (requestJSONEmail.data && Object.keys(requestJSONEmail.data).length > 0) {
                  if(requestJSONEmail.data.userExists=== false && requestJSONEmail.data.message === "Email Id is valid") {
                    // Calling the async function to handle the OTP request
                    //                       self.view.lblEmailBackendError.setVisibility(false);
                    voltmx.store.setItem("email", self.view.tbxEmailAddress.text);
                    voltmx.store.setItem("isEmailVerified", true);
                    await self.sendEmailOTPRequest(self.view.tbxEmailAddress.text, verification_type);
                  }
                  else{
                    voltmx.application.dismissLoadingScreen();
                    self.view.lblEmailError.text = "* Email Already Exists!!";
                  }
                }
                else{
                  voltmx.application.dismissLoadingScreen();
                  alert(requestJSONEmail.error.message);
                  self.view.lblEmailError.text = "* Backend or Service Error!"
                }
              }
              else {
                voltmx.application.dismissLoadingScreen();
                self.view.lblEmailError.text ="* Response Error";
                alert(" Failed to check email: " + request.status + " - " + request.responseText);
              }
            }
            //              else {
            //                 voltmx.application.dismissLoadingScreen();
            //               self.view.lblEmailError.text = "* Request Error!!";
            //               alert(" Failed to check email: " + request.status + " - " + request.responseText);
            //             }
          }
        };
        var requestData = JSON.stringify({
          "verfication_type": verification_type,
          "value": self.view.tbxEmailAddress.text
        });

        request.send(requestData); // Send the request

      } catch (error) {
        alert("❌ Error: " + error.message);
        voltmx.print("❌ Error: " + error.message);
      }
    } else {
      //       self.view.lblEmailRequired.setVisibility(true);
      voltmx.application.dismissLoadingScreen();
      self.view.lblEmailError.text = "Email Required!!";
      self.view.flxEmail.setVisibility(true);
      self.view.flxEmailVerificationCode.setVisibility(false);
    }
    }
    else{
            voltmx.application.dismissLoadingScreen();
            self.view.flxEmailContainer.setVisibility(false);
            self.view.flxEmailVerificationCode.setVisibility(true);
    }
  },


  // Function to handle sending OTP for the email, calling send email otp service!!!
  sendEmailOTPRequest: async function(email) {

    var self = this;
    var verification_type = "Email";
    try {
      return new Promise((resolve, reject) => {
        var url = "https://dev-hcltx.et.ae:443/services/ms_user_reg/send-email-otp";

        var request = new voltmx.net.HttpRequest();
        request.open("POST", url);
        // Prepare Base64 credentials
        var username = "d6bebb28b79927d1c747ea19b028ceb4";
        var password = "5da9490e70d8f3201e20c4cf203961da";
        var credentials = username + ":" + password;
        //         var encodedValue = this.encodeToBase64(credentials);  
        //  request.setRequestHeader("Authorization", "Basic " + encodedValue);
        request.setRequestHeader("Content-Type", "application/json");
        request.setRequestHeader("Accept", "application/json");
        // Handling the response
        request.onReadyStateChange = function() {
          if (request.readyState === 4) {
            if (request.status === 200) {
              voltmx.application.dismissLoadingScreen();
              var requestStringSentEmail = request.responseText;
              var requestJSONSentEmail = JSON.parse(requestStringSentEmail);
              //alert("requestJSON from send email OTP: " + requestJSONSentEmail);
              var opstatusRes2 = requestJSONSentEmail.opstatus;
              if (opstatusRes2 === 0 &&requestJSONSentEmail.data.reg_status === "INITIATED" && requestJSONSentEmail.data.otp!==null ) {

                var emailOTP = requestJSONSentEmail.data.otp;
                voltmx.store.setItem("emailOTP", emailOTP);
                var reg_id = requestJSONSentEmail.data.reg_id;
                voltmx.store.setItem("regId", reg_id);
                var email = requestJSONSentEmail.data.email;
                voltmx.store.setItem("email", email);
                var country_code = requestJSONSentEmail.data.country_code;
                voltmx.store.setItem("country_code", country_code);
                voltmx.store.setItem("isEmailOtpVerified", false);
                // Update the UI
                self.view.flxEmailContainer.setVisibility(false);
                //                 self.view.lblEmailRequired.setVisibility(false);
                self.view.flxEmailVerificationCode.setVisibility(true);
                self.view.flxResendCode.setVisibility(true);
                self.startOTPTimerforEmail();
                self.emailtbxCode1OnTextChange();
                self.view.flxInnerBarEmailVerificationCode.width = "42%";
                resolve(); // Resolve when successful
              } 
              else {
                reject(new Error("OTP not sent. Opstatus: " + opstatusRes2)); // Reject if opstatus isn't 0
                //  alert("❌ Failed: " + request.status + " - " + request.responseText);
              }
            } else {
              voltmx.application.dismissLoadingScreen();
              reject(new Error("Failed to send email OTP: " + request.status + " - " + request.responseText)); // Reject on failure
            }
          }
        }
        var requestData = JSON.stringify({
          "email": self.view.tbxEmailAddress.text,
          "verification_type": verification_type,
        });

        request.send(requestData); // Send the request 
      });
    }   
    catch (error) {
      alert("❌ Error sending email OTP: " + error.message);
      voltmx.print("❌ Error sending email OTP: " + error.message);
    }
  },
  startOTPTimerforEmail:function() {
    this.countdownTime = 30;
    kony.timer.schedule("otpTimer", this.updateTimerForEmail.bind(this), 1, true);
  },
  updateTimerForEmail: function() {
    var minutes = Math.floor(this.countdownTime / 60);
    var seconds = this.countdownTime % 60;

    // Manually pad with leading zeros
    var minStr = (minutes < 10 ? "0" + minutes : "" + minutes);
    var secStr = (seconds < 10 ? "0" + seconds : "" + seconds);

    this.view.lblEmailTimer.text = minStr + ":" + secStr;

    this.countdownTime--;

    if (this.countdownTime < 0) {
      kony.timer.cancel("otpTimer");
      this.view.lblEmailResendCodein.text = "Resend Code?";
      this.view.lblEmailResendCodein.skin = "sknlblCPLtCaptd32437Font80px";
      this.view.lblEmailTimer.setVisibility(false);
    }
  },
  encodeToBase64: function(input) {
    var keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
    var output = "";
    var chr1, chr2, chr3;
    var enc1, enc2, enc3, enc4;
    var i = 0;

    while (i < input.length) {
      chr1 = input.charCodeAt(i++);
      chr2 = input.charCodeAt(i++);
      chr3 = input.charCodeAt(i++);

      enc1 = chr1 >> 2;
      enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
      enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
      enc4 = chr3 & 63;

      if (isNaN(chr2)) {
        enc3 = enc4 = 64;
      } else if (isNaN(chr3)) {
        enc4 = 64;
      }

      output += keyStr.charAt(enc1) + keyStr.charAt(enc2) +
        keyStr.charAt(enc3) + keyStr.charAt(enc4);
    }

    return output;
  },

  //function to set Email OTP Automatically from the service in the texboxes without entering!!
  emailtbxCode1OnTextChange: function(){
    var emailOTP = voltmx.store.getItem("emailOTP");
    var code1 = emailOTP.slice(0, 1);
    var code2 = emailOTP.slice(1, 2);
    var code3 = emailOTP.slice(2, 3);
    var code4 = emailOTP.slice(3, 4);
    //var code5 = emailOTP.slice(4, 5);
    //var code6 = emailOTP.slice(5, 6);
    //alert("email Otp: code1 ="+code1 +"code2 ="+code2+"code3 ="+code3+"code4 ="+code4);
    // Assign values to textboxes
    this.view.tbxCode1.text = code1;
    this.view.tbxCode2.text = code2;
    this.view.tbxCode3.text = code3;
    this.view.tbxCode4.text = code4;
    //this.view.tbxCode5.text = code5;
    //this.view.tbxCode6.text = code6;
    if(this.view.tbxCode1.text !==null&&this.view.tbxCode2.text !==null&&this.view.tbxCode3.text !==null&&this.view.tbxCode4.text !==null)
    {
      var email = voltmx.store.getItem("email");
      this.view.flxEmailVerificationFooter.setVisibility(true);
      this.view.tbxCode1.setEnabled(false);
      this.view.tbxCode2.setEnabled(false);
      this.view.tbxCode3.setEnabled(false);
      this.view.tbxCode4.setEnabled(false);
    }
    else{
      this.view.flxMobileContainer.setVisibility(false);
      this.view.flxEmailVerificationCode.setVisibility(true);
    }
  },

  //Function to call Resend OTP When the otp is expired!!
  flxResendCodeOnClickAction: async function(){
    if(this.view.lblEmailResendCodein.text === "Resend Code?"){
      voltmx.application.showLoadingScreen();
      var self = this;
      var email = voltmx.store.getItem("email");
      var verification_type ="Email";
      var regId = voltmx.store.getItem("regId");
      var url = "https://dev-hcltx.et.ae:443/services/ms_user_reg/resend-otp";

      try {
        var request = new voltmx.net.HttpRequest();
        request.open("POST", url);

        var username = "d6bebb28b79927d1c747ea19b028ceb4";
        var password = "5da9490e70d8f3201e20c4cf203961da";
        var credentials = username + ":" + password;
        //       var encodedValue = this.encodeToBase64(credentials);
        // Setting Headers
        //request.setRequestHeader("Authorization", "Basic " + encodedValue);
        request.setRequestHeader("Content-Type", "application/json");
        request.setRequestHeader("Accept", "application/json");

        // Use Promise-based onReadyStateChange to work with async/await
        await new Promise((resolve, reject) => {
          request.onReadyStateChange = function() {
            if (request.readyState === 4) {
              if (request.status === 200) {
                //  alert("✅ Success from resend otp: " + request.responseText);
                voltmx.application.dismissLoadingScreen();

                var requestString = request.responseText;
                var requestJSONresendEmailOTP = JSON.parse(requestString);
                alert("requestJSON resend email otp: " + JSON.stringify(requestJSONresendEmailOTP)); // Stringify for better logging
                var opstatusRes2 = requestJSONresendEmailOTP.opstatus;
                if (opstatusRes2 === 0 &&requestJSONresendEmailOTP.data.otp!==null ) {
                  var resendEmailOTP = requestJSONresendEmailOTP.data.otp;
                  voltmx.store.setItem("emailOTP", resendEmailOTP);
                  var reg_id = requestJSONresendEmailOTP.data.reg_id;
                  voltmx.store.setItem("regId", reg_id);
                  //               var isEmailOtpVerified = 
                  // Update the UI
                  self.view.flxEmailContainer.setVisibility(false);
                  //                 self.view.lblEmailRequired.setVisibility(false);
                  self.view.flxEmailVerificationCode.setVisibility(true);
                  self.startOTPTimerforEmail();
                  self.emailtbxCode1OnTextChange();

                  resolve(); // Resolve when successful
                } 
                else {
                  reject(new Error("resend OTP not sent. Opstatus: " + opstatusRes2)); // Reject if opstatus isn't 0
                  //  alert("❌ Failed: " + request.status + " - " + request.responseText);
                }
              } else {
                reject(new Error("Failed to resend email OTP: " + request.status + " - " + request.responseText)); // Reject on failure
              }
            }
          }
          var requestData = JSON.stringify({
            "email": self.view.tbxEmailAddress.text,
            "verification_type": verification_type,
            "reg_id" :regId ,

          });

          request.send(requestData); // Send the request 
        });
      }   
      catch (error) {
        alert("❌ Error Resending email OTP: " + error.message);
        voltmx.print("❌ Error Resending email OTP: " + error.message);
      }
    }
  },

  //Function to call verify email otp Service in email verification code page!!!
  flxNextInEmailVerificationOnTouchEndAction: async function(){
    var self = this;
    var isEmailOtpVerified = voltmx.store.getItem("isEmailOtpVerified");
    if(isEmailOtpVerified === false){
      voltmx.application.showLoadingScreen();
      kony.timer.cancel("otpTimer");
      var email = voltmx.store.getItem("email");
      var verification_type ="Email";
      var emailOTP = voltmx.store.getItem("emailOTP");
      var regId = voltmx.store.getItem("regId");
      var url = "https://dev-hcltx.et.ae:443/services/ms_user_reg/verify-otp";

      try {
        var request = new voltmx.net.HttpRequest();
        request.open("POST", url);

        var username = "d6bebb28b79927d1c747ea19b028ceb4";
        var password = "5da9490e70d8f3201e20c4cf203961da";
        var credentials = username + ":" + password;
        //       var encodedValue = this.encodeToBase64(credentials);
        // Setting Headers
        //request.setRequestHeader("Authorization", "Basic " + encodedValue);
        request.setRequestHeader("Content-Type", "application/json");
        request.setRequestHeader("Accept", "application/json");

        // Use Promise-based onReadyStateChange to work with async/await
        await new Promise((resolve, reject) => {
          request.onReadyStateChange = function() {
            if (request.readyState === 4) {
              if (request.status === 200) {
                //  alert("✅ Success from verify otp: " + request.responseText);
                voltmx.application.dismissLoadingScreen();
                var requestString = request.responseText;
                var requestJSON = JSON.parse(requestString);
                // alert("requestJSON verify email: " + JSON.stringify(requestJSON)); // Stringify for better logging
                // alert("opstatus: " + requestJSON.opstatus);
                //               var opstatusRes = requestJSON.opstatus;
                if (requestJSON.data.is_verified === true  ) {
                  var is_verified = requestJSON.data.is_verified;
                  var reg_id = requestJSON.data.reg_id;
                  voltmx.store.setItem("regId", reg_id);
                  self.view.flxMobileContainer.setVisibility(true);
                  self.view.flxEmailOtpVerified.setVisibility(true);
                  self.view.flxResendCode.setVisibility(false);
                  voltmx.store.setItem("isEmailOtpVerified", true);
                  voltmx.store.setItem("isMobileVerified", false);
                  self.view.lblSignedEmail.text = email;
                  self.view.flxEmailVerificationCode.setVisibility(false);
                } else {
                  voltmx.application.dismissLoadingScreen();
                  self.view.flxEmailOtpError.setVisibility(true);
                  self.view.lblEmailOtpError.text ="Backend Response Failed!!";
                  self.view.flxResendCode.setVisibility(false);
                  // alert("❌ Failed: " + request.status + " - " + request.responseText);
                  alert("❌ OTP verification failed! Response error.");
                }
                resolve(); // Resolve the promise on success
              } else {
                voltmx.application.dismissLoadingScreen();
                self.view.flxEmailOtpError.setVisibility(true);
                self.view.lblEmailOtpError.text ="Request Failed!!";
                self.view.flxResendCode.setVisibility(false);
                // alert("❌ Failed: " + request.status + " - " + request.responseText);
                // voltmx.print("❌ Failed: " + request.status + " - " + request.responseText);
                reject(new Error("Failed to verify OTP.")); // Reject on failure
              }
            }
          };
          // Sending JSON data
          var jsonData = JSON.stringify({
            "email": email,
            "verification_type": verification_type,
            "otp": emailOTP,
            "reg_id": regId
          });

          request.send(jsonData); // Send the request
        });
      } catch (error) {
        alert("❌ Error: " + error.message);
        voltmx.print("❌ Error: " + error.message);
      }
    }
    else{
      voltmx.application.dismissLoadingScreen();
      self.view.flxEmailVerificationCode.setVisibility(false);
      self.view.flxMobileContainer.setVisibility(true);
    }
  },
  //function to call "mobile validation Service" as well as calling "sendMobileOtp" function!!!
  imgNextInMobileVerificationOnTouchEndAction: async function(){
   
    var self = this;
    var isMobileVerified = voltmx.store.getItem("isMobileVerified");
    if(isMobileVerified === false){
           voltmx.application.showLoadingScreen();

    if(self.view.tbxPhoneNumber.text !== null ){

      var verification_type = "phone";
      var reg_id = voltmx.store.getItem("regId");
      var url = "https://dev-hcltx.et.ae:443/services/ms_user_reg/check-user-attribute";
      var request = new voltmx.net.HttpRequest();
      request.open("POST", url);

      var username = "d6bebb28b79927d1c747ea19b028ceb4";
      var password = "5da9490e70d8f3201e20c4cf203961da";
      var credentials = username + ":" + password;
      //       var encodedValue = this.encodeToBase64(credentials);  
      // Setting Headers
      //     request.setRequestHeader("Authorization", "Basic " + encodedValue);
      request.setRequestHeader("Content-Type", "application/json");
      request.setRequestHeader("Accept", "application/json");

      // Handling the response
      request.onReadyStateChange = async function () {
        if (request.readyState === 4) {
          if (request.status === 200 ) {
            //alert("✅ Success: " + request.responseText);
            var requestString = request.responseText;
            var requestJSON = JSON.parse(requestString);
            var opstatusRes = requestJSON.opstatus;
            if(opstatusRes === 0 ){
              if (requestJSON.data && Object.keys(requestJSON.data).length > 0) {

                if(requestJSON.data.message === "Phone Number is valid" && requestJSON.data.userExists === false){
                  voltmx.store.setItem("isMobileVerified", true);
                  await self.sendMobileOTP();
                  voltmx.store.setItem("mobile", self.view.tbxPhoneNumber.text);
                }
                else{

                  voltmx.application.dismissLoadingScreen();
                  self.view.lblMobileError.text = "* Mobile Already Exists!!"
                  // alert(" Failed: " + request.status + " - " + request.responseText);
                }
              }
              else{
                voltmx.application.dismissLoadingScreen();
                alert(requestJSON.error.message);
                self.view.lblMobileError.text = "* Backend or Service Error!"
              }
            }
            else{
              voltmx.application.dismissLoadingScreen();
              self.view.lblMobileError.text ="* Response Error";
              alert(" Failed to check email: " + request.status + " - " + request.responseText);
            }
          } else {
            voltmx.application.dismissLoadingScreen();
            self.view.lblMobileError.text ="* Request Error";
            alert("❌ Failed: " + request.status + " - " + request.responseText);
            //             voltmx.print("❌ Failed: " + request.status + " - " + request.responseText);
          }
        }
      };
      // JSON Data
      var jsonData = JSON.stringify({
        "value" : self.view.tbxPhoneNumber.text,
        "verfication_type"   :verification_type ,
      });
      // Sending Request
      request.send(jsonData);
    }
    else{
        voltmx.application.dismissLoadingScreen();
      self.view.lblMobileError.text ="*Mobile Required!!";
      self.view.flxMobileVerifyAndOTPCode.setVisibility(false);
      self.view.flxMobileContainer.setVisibility(true);
    }
    }
    else{
      voltmx.application.dismissLoadingScreen();

      self.view.flxMobileVerifyAndOTPCode.setVisibility(true);
      self.view.flxMobileContainer.setVisibility(false);
    }
  },
  //function to call "send mobile otp service" and navigate to verify mobile otp page!!!
  sendMobileOTP: function(){
    var self = this;
    var country_code = voltmx.store.getItem("country_code");
    var verification_type = "Mobile";
    var reg_id = voltmx.store.getItem("regId");
    try {
      return new Promise((resolve, reject) => {
        var url = "https://dev-hcltx.et.ae:443/services/ms_user_reg/send-mobile-otp";
        var request = new voltmx.net.HttpRequest();
        request.open("POST", url);
        // Prepare Base64 credentials
        var username = "d6bebb28b79927d1c747ea19b028ceb4";
        var password = "5da9490e70d8f3201e20c4cf203961da";
        var credentials = username + ":" + password;
        //         var encodedValue = this.encodeToBase64(credentials);  
        // request.setRequestHeader("Authorization", "Basic " + encodedValue);
        request.setRequestHeader("Content-Type", "application/json");
        request.setRequestHeader("Accept", "application/json");
        // Handling the response
        request.onReadyStateChange = function() {
          if (request.readyState === 4) {
            if (request.status === 200) {
              voltmx.application.dismissLoadingScreen();
              var requestStringSentMobile = request.responseText;
              var requestJSONSentMobile = JSON.parse(requestStringSentMobile);
              // alert("requestJSON from send mobile otp: " + requestJSONSentMobile);
              //               var opstatusRes2 = requestJSONSentMobile.opstatus;
              if (requestJSONSentMobile.data.reg_status === "INITIATED" &&requestJSONSentMobile.data.otp!==null ) {
                //var countryCode = requestJSON.data.country_code;
                kony.timer.cancel("otpTimer");
                var Mobileotp = requestJSONSentMobile.data.otp;
                voltmx.store.setItem("otp", Mobileotp);
                var reg_id= requestJSONSentMobile.data.reg_id;
                voltmx.store.setItem("regId", reg_id);
                var phone_number = requestJSONSentMobile.data.phone_number;
                voltmx.store.setItem("mobile", phone_number);
                voltmx.store.setItem("isMobileOtpVerified",false);
                //                 self.view.lblMobileRequired.setVisibility(false);
                self.view.flxMobileContainer.setVisibility(false);        
                self.view.flxMobileVerifyAndOTPCode.setVisibility(true);
                self.startOTPTimerForMobile();
                self.tbxOTP1OnTextChangeAction();
                self.view.flxInnerBarMobileOtp.width = "60%";
                resolve(); // Resolve when successful
              } 
              else {
                voltmx.application.dismissLoadingScreen();
                self.view.flxInnerBarMobileOtp.width = "54%";
                //                 reject(new Error("OTP not sent. Opstatus: " + opstatusRes2)); // Reject if opstatus isn't 0
                reject(new Error("Failed to send email OTP: " + request.status + " - " + request.responseText)); // Reject on failure
              }
            } else {
              voltmx.application.dismissLoadingScreen();

              reject(new Error("Failed to send email OTP: " + request.status + " - " + request.responseText)); // Reject on failure
            }
          }
        }
        var requestData = JSON.stringify({
          "mobile_number": self.view.tbxPhoneNumber.text,
          "verification_type": verification_type,
          "reg_id":Number(reg_id),
          "country_code":"+971"
        });
        request.send(requestData); // Send the request 
      });
    }   
    catch (error) {
      alert("❌ Error sending email OTP: " + error.message);
      voltmx.print("❌ Error sending email OTP: " + error.message);
    }
  },
  startOTPTimerForMobile: function() {
    this.countdownTimeMobile = 30;
    kony.timer.schedule("otpTimerMobile", this.updateTimerForMobile.bind(this), 1, true);
  },


  updateTimerForMobile: function() {
    var minutes = Math.floor(this.countdownTimeMobile / 60);
    var seconds = this.countdownTimeMobile % 60;

    // Padding manually
    var minStr = (minutes < 10 ? "0" + minutes : "" + minutes);
    var secStr = (seconds < 10 ? "0" + seconds : "" + seconds);

    this.view.lblMobileTimer.text = minStr + ":" + secStr;

    this.countdownTimeMobile--;

    if (this.countdownTimeMobile < 0) {
      kony.timer.cancel("otpTimerMobile");
      this.view.lblResendMblOTPCode.text = "Resend Code?";
      this.view.lblResendMblOTPCode.skin = "sknlblCPLtCaptd32437Font80px";
      this.view.lblMobileTimer.setVisibility(false);
    }
  },

  //Mobile Number OnTextChange Action in Mobile Container!!!!!
  tbxPhoneNumberonTextChangeAction: function(){ 
    var pattern = /^\d{10}$/; // 10-digit phone number
    var phoneNumber = this.view.tbxPhoneNumber.text;

    if (!phoneNumber || phoneNumber.trim() === "") {
      this.view.lblMobileError.text = "Mobile Number Required!!";
      this.view.flxMobileFooter.setVisibility(false);
    } else if (!phoneNumber.match(pattern)) {
      this.view.lblMobileError.text = "Enter Valid Mobile";
      this.view.flxMobileFooter.setVisibility(false);
    } else {
      this.view.lblMobileError.text = "";
      this.view.flxMobileFooter.setVisibility(true);
    }
  },
  flxCountryCodeOnClickAction: function(){
  this.view.flxCountryCodePopup.setVisibility(true);
  },
  flxCountrycodeClosePopupOnClickAction: function(){
      this.view.flxCountryCodePopup.setVisibility(false);

  },
  segCountryCodesOnRowClickAction: function(){
    var selectedCountryCode = this.view.segCountryCodes.selectedRowItems;
//     alert("selected Country Code :"+selectedCountryCode);
    var countrycode = selectedCountryCode[0].lblCountryCode;
    var selectedCountryFlag = selectedCountryCode[0].imgCountryFlag;
    this.view.lblCountryCode.text = countrycode;
    this.view.imgCountryCode.src = selectedCountryFlag;
//     selected Country Code: [{
//        lblCountryName:United Arab Emirates,
//       lblCountryCode : +971,
//         imgCountryFlag :uae.png.
//     }] 
  },
  flxImgBackOnClickAction: function(){
    this.view.flxCountryCodePopup.setVisibility(false);
  },
  
tbxSearchCountryCodeOnTextChangeAction: function() {
    var self = this;

    // Ensure original data is preserved
    if (!self.originalCountryData) {
        self.originalCountryData = self.view.segCountryCodes.data || [];
    }

    var allItems = self.originalCountryData;
    var searchValue = self.view.tbxSearchCountryCode.text.trim();
    var segLabelName = "lblCountryName";
    var filteredData = [];

    // If search is empty, restore the full list and exit
    if (searchValue === "") {
        self.view.segCountryCodes.setData(allItems);
        return;
    }

    // Validate input
    if (!Array.isArray(allItems) || !searchValue) {
        self.view.segCountryCodes.setData(allItems);
        return;
    }

    var pattern = searchValue.toUpperCase();

    for (var i = 0; i < allItems.length; i++) {
        var labelValue = allItems[i][segLabelName];
        if (labelValue && labelValue.toUpperCase().includes(pattern)) {
            filteredData.push(allItems[i]);
        }
    }

    self.view.segCountryCodes.setData(filteredData);
},
  
  flxResendOTPCodeOnClickAction: async function(){
    if(this.view.lblEmailResendCodein.text === "Resend Code?"){
      voltmx.application.showLoadingScreen();
      var self = this;
      var country_code = voltmx.store.getItem("country_code");
      var verification_type ="Mobile";
      var regId = voltmx.store.getItem("regId");
      var url = "https://dev-hcltx.et.ae:443/services/ms_user_reg/resend-otp";

      try {
        var request = new voltmx.net.HttpRequest();
        request.open("POST", url);

        var username = "d6bebb28b79927d1c747ea19b028ceb4";
        var password = "5da9490e70d8f3201e20c4cf203961da";
        var credentials = username + ":" + password;
        //       var encodedValue = this.encodeToBase64(credentials);
        // Setting Headers
        //request.setRequestHeader("Authorization", "Basic " + encodedValue);
        request.setRequestHeader("Content-Type", "application/json");
        request.setRequestHeader("Accept", "application/json");

        // Use Promise-based onReadyStateChange to work with async/await
        await new Promise((resolve, reject) => {
          request.onReadyStateChange = function() {
            if (request.readyState === 4) {
              if (request.status === 200) {
                //  alert("✅ Success from resend otp: " + request.responseText);
                voltmx.application.dismissLoadingScreen();
                var requestString = request.responseText;
                var requestJSONresendMobileOTP = JSON.parse(requestString);
                //               alert("requestJSON resend email otp: " + JSON.stringify(requestJSONresendMobileOTP)); // Stringify for better logging
                var opstatusRes2 = requestJSONresendMobileOTP.opstatus;
                if (opstatusRes2 === 0 &&requestJSONresendMobileOTP.data.otp!==null ) {
                  var Mobileotp = requestJSONresendMobileOTP.data.otp;
                  voltmx.store.setItem("otp", Mobileotp);
                  var reg_id= requestJSONresendMobileOTP.data.reg_id;
                  voltmx.store.setItem("regId", reg_id);

                  //                 self.view.lblMobileRequired.setVisibility(false);
                  self.view.flxMobileContainer.setVisibility(false);        
                  self.view.flxMobileVerifyAndOTPCode.setVisibility(true);
                  self.startOTPTimerForMobile();
                  self.tbxOTP1OnTextChangeAction();
                  resolve(); // Resolve when successful
                } 
                else {
                  voltmx.application.dismissLoadingScreen();

                  reject(new Error("resend OTP not sent. Opstatus: " + opstatusRes2)); // Reject if opstatus isn't 0
                  //  alert("❌ Failed: " + request.status + " - " + request.responseText);
                }
              } else {
                voltmx.application.dismissLoadingScreen();

                reject(new Error("Failed to resend email OTP: " + request.status + " - " + request.responseText)); // Reject on failure
              }
            }
          }
          var requestData = JSON.stringify({
            "mobile_number":self.view.tbxPhoneNumber.text,
            "verification_type": verification_type,
            "reg_id" :regId ,
          });

          request.send(requestData); // Send the request 
        });
      }   
      catch (error) {
        alert("❌ Error Resending Mobile OTP: " + error.message);
        voltmx.print("❌ Error Resending Mobile OTP: " + error.message);
      }
    }
  },
  //function to set Mobile OTP Automatically from the service in the texboxes without entering!!
  tbxOTP1OnTextChangeAction: function(){
    var otp = voltmx.store.getItem("otp");
    var code1 = otp.slice(0, 1);
    var code2 = otp.slice(1, 2);
    var code3 = otp.slice(2, 3);
    var code4 = otp.slice(3, 4);
    //     var code5 = otp.slice(4, 5);
    //     var code6 = otp.slice(5, 6);
    //     alert("email Otp: code1 ="+code1 +"code2 ="+code2+"code3 ="+code3+"code4 ="+code4);
    // Assign values to textboxes
    this.view.tbxOTP1.text = code1;
    this.view.tbxOTP2.text = code2;
    this.view.tbxotp3.text = code3;
    this.view.tbxOTP4.text = code4;
    //     this.view.tbxOTP5.text = code5;
    //     this.view.tbxOTP6.text = code6;
    if(this.view.tbxOTP1.text !==null&&this.view.tbxOTP2.text !==null&&this.view.tbxotp3.text !==null&&this.view.tbxOTP4.text !==null)
    {
      this.view.flxOtpVerificationFooter.setVisibility(true);
      this.view.tbxOTP1.setEnabled(false);
      this.view.tbxOTP2.setEnabled(false); 
      this.view.tbxotp3.setEnabled(false); 
      this.view.tbxOTP4.setEnabled(false);
    }
    else{
      this.view.flxOtpVerificationFooter.setVisibility(false);
    }
  },

  //function to call "Verify Mobile OTP Service"  and navigate to Username Page!!!
  flxNextInOTPVerificationOnTouchEndAction: async function(){
    var self = this;
    var isMobileOtpVerified= voltmx.store.getItem("isMobileOtpVerified");
    if(isMobileOtpVerified=== false){
      kony.timer.cancel("otpTimerMobile");
      voltmx.application.showLoadingScreen();
      var otp = voltmx.store.getItem("otp");
      var countrycode = voltmx.store.getItem("country_code");
      var verification_type = "Mobile";
      var reg_id = voltmx.store.getItem("regId");
      var url = "https://dev-hcltx.et.ae:443/services/ms_user_reg/verify-otp";
      var request = new voltmx.net.HttpRequest();
      request.open("POST", url);

      var username = "d6bebb28b79927d1c747ea19b028ceb4";
      var password = "5da9490e70d8f3201e20c4cf203961da";
      var credentials = username + ":" + password;
      //     var encodedValue = this.encodeToBase64(credentials);  
      // Setting Headers
      //request.setRequestHeader("Authorization", "Basic " + encodedValue);
      request.setRequestHeader("Content-Type", "application/json");
      request.setRequestHeader("Accept", "application/json");
      // Handling the response
      await new Promise((resolve, reject) => {
        request.onReadyStateChange = function () {
          if (request.readyState === 4) {
            if (request.status === 200 ) {
              //  alert("✅ Success: " + request.responseText);
              voltmx.application.dismissLoadingScreen();
              var requestString = request.responseText;
              var requestJSON = JSON.parse(requestString);
              // alert("opstatus : "+requestJSON.opstatus);
              //voltmx.print("✅ Success: " + request.responseText);
              //             var opstatusRes = requestJSON.opstatus;
              if(requestJSON.data.is_verified === true){
                self.view.flxMobileVerifyAndOTPCode.setVisibility(false);
                self.view.flxUserName.setVisibility(true);
                voltmx.store.setItem("isMobileOtpVerified", true);
                self.view.flxMobileOtpVerified.setVisibility(true);
                self.view.flxResendOTPCode.setVisibility(false);
              }
              else{
                //               alert("response error!!!");
                voltmx.application.dismissLoadingScreen();

              }
            } else {
              voltmx.application.dismissLoadingScreen();

              //   alert("❌ Failed: " + request.status + " - " + request.responseText);
              voltmx.print("❌ Failed: " + request.status + " - " + request.responseText);
            }
          }
        };
        // JSON Data
        var jsonData = JSON.stringify({
          "mobile_number": self.view.tbxPhoneNumber.text,
          "otp":otp,
          "country_code" : "+971",
          "reg_id" : reg_id,
          "verification_type" :verification_type
        });
        // Sending Request
        request.send(jsonData);
      });
    }
    else{
      voltmx.application.dismissLoadingScreen();
      self.view.flxMobileVerifyAndOTPCode.setVisibility(false);
      self.view.flxUserName.setVisibility(true);
    }
  },

  //Navigation from UserName to PassWord and Confirm Password Page!!!!!
  flxNextUserNameOnTouchEndAction: function(){
    this.view.flxPassWord.setVisibility(true);
    this.view.flxUserName.setVisibility(false);
    //     this.view.btnSaveAndContinueForTermsNConditions.setEnabled(false);
    //     this.view.btnSaveAndContinueForTermsNConditions.skin ="sknbtnBGa3a3a3CstmBorder5pxFontCPReg70px"
  },
  //Navigation from Password and Confirm Password to terms and conditions page!!!!
  imgNextPasswordOnTouchEnd: function(){
    if(this.view.tbxUserName.text !== null &&this.view.tbxPassWordName.text !==null ){
      if(this.PasswordValidate()&&this.ConfirmPassValidate()){
        this.view.flxTermsAndConditions.setVisibility(true);
      }
      else{
        this.view.flxTermsAndConditions.setVisibility(false);
      }
    }
  },
  //Validating PassWord!!!!!
  PasswordValidate: function(){
    var self = this;
    var password = self.view.tbxPassWordName.text;
    var pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,16}$/;
    if(!password.match(pattern)){
      self.view.lblPassWordError.isVisible = true;
      return false;
    }
    else{
      self.view.lblPassWordError.isVisible = false;
      return true;
    }
  },
  //Validating Confirm Password!!!!
  ConfirmPassValidate: function(){
    var self = this;
    var confirmPassword = self.view.tbxConfirmPassWord.text;
    var password = self.view.tbxPassWordName.text;
    var pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,16}$/;
    if(!confirmPassword.match(pattern) || confirmPassword !== password){
      self.view.lblPassWordShouldMatchConfirmPassword.setVisibility(true);
      return false;
    }
    else{
      self.view.lblPassWordShouldMatchConfirmPassword.setVisibility(false);
      return true;
    }
  },

  //User name onTextChange Action!!!!!!
  tbxUserNameOnTextChangeAction: function(){

    var pattern = /^[A-Za-z0-9]{3,}$/; // Only letters and digits, min length 3
    var userName = this.view.tbxUserName.text.trim();

    if (!userName.match(pattern)) {
      this.view.flxUserNameFooter.setVisibility(false); // Valid
      this.view.lblUserNameError.text ="Username is Not Valid!!";
      this.view.flxInnerBarUserName.width = "61%";
    } else {
      this.view.flxUserNameFooter.setVisibility(true);  // Invalid
      this.view.lblUserNameError.text ="";  
      this.view.flxInnerBarUserName.width = "70%";
    }

  },
  //Function to call user validation Service and enabling Password and Confirm PassWord page!!!!
  imgNextUserNameOnTouchEndAction: async function(){
    var url = "https://dev-hcltx.et.ae:443/services/ms_user_reg/check-user-attribute";
    var self = this;
    voltmx.application.showLoadingScreen();
    var verification_type ="userName";
    try {
      var request = new voltmx.net.HttpRequest();
      request.open("POST", url);
      var username = "d6bebb28b79927d1c747ea19b028ceb4";
      var password = "5da9490e70d8f3201e20c4cf203961da";
      var credentials = username + ":" + password;
      //       var encodedValue = this.encodeToBase64(credentials);
      // Setting Headers
      //  request.setRequestHeader("Authorization", "Basic " + encodedValue);
      request.setRequestHeader("Content-Type", "application/json");
      request.setRequestHeader("Accept", "application/json");
      // Use Promise-based onReadyStateChange to work with async/await
      await new Promise((resolve, reject) => {
        request.onReadyStateChange = function() {
          if (request.readyState === 4) {
            if (request.status === 200 ) {
              //  alert("✅ Success from check user name: " + request.responseText);
              voltmx.application.dismissLoadingScreen();
              var requestString = request.responseText;
              var requestJSON = JSON.parse(requestString); 
              var opstatusRes = requestJSON.opstatus;
              if (opstatusRes === 0 ){
                if (requestJSON.data && Object.keys(requestJSON.data).length > 0) {
                  if(requestJSON.data.userExists === false && requestJSON.data.message === "User name is valid" ) {
                    self.view.flxPassWord.setVisibility(true);
                    self.view.flxUserName.setVisibility(false);
                  } else {
                    voltmx.application.dismissLoadingScreen();
                    self.view.lblUserNameError.text = "* User Already Exists!!!"
                    alert("❌ Failed: " + request.status + " - " + request.responseText);
                  }
                  resolve(); // Resolve the promise on success
                }
                else{
                  voltmx.application.dismissLoadingScreen();
                  alert(requestJSON.error.message);
                  self.view.lblUserNameError.text = "* Backend or Service Error!"
                }
              }

              else{
                voltmx.application.dismissLoadingScreen();
                self.view.lblUserNameError.text ="* Response Error!!";
                voltmx.print("❌ Failed: " + request.status + " - " + request.responseText);
              }
            } else {
              voltmx.application.dismissLoadingScreen();
              self.view.lblUserNameError.text ="* Request Error!!";
              voltmx.print("❌ Failed: " + request.status + " - " + request.responseText);
              reject(new Error("Failed to check user name.")); // Reject on failure
            }
          }
        };
        // Sending JSON data
        var jsonData = JSON.stringify({
          "verfication_type": verification_type,
          "value":self.view.tbxUserName.text ,
        });
        request.send(jsonData); // Send the request
      });
    } catch (error) {
      alert("❌ Error: " + error.message);
      voltmx.print("❌ Error: " + error.message);
    }
  },
  //Password OnText Change Action!!!!!!
//   tbxPassWordNameOnTextChangeAction: function(){

//     if (this.view.tbxPassWordName.text.length > 0) {
//       this.view.imgEyeOpenPass.setVisibility(true);  // Always show the eye icon when typing

//       if (this.view.tbxPassWordName.secureTextEntry === true) {
//         this.view.imgEyeClosePass.setVisibility(true);   // Show cross if password is hidden
//       } else {
//         this.view.imgEyeClosePass.setVisibility(false);  // Hide cross if password is visible
//       }
//     } else {
//       // No text typed yet, hide both icons
//       this.view.imgEyeOpenPass.setVisibility(false);
//       this.view.imgEyeClosePass.setVisibility(false);
//     }
//     if(this.PasswordValidate()){
//       this.view.flxPasswordFooter.setVisibility(true);
//     }
//     else{
//      this.view.flxPasswordFooter.setVisibility(false);

//     }

//   },
  tbxPassWordNameOnTextChangeAction: function() {
    var passwordText = this.view.tbxPassWordName.text;
    var isPasswordHidden = this.view.tbxPassWordName.secureTextEntry;

    if (passwordText.length > 0) {
        this.view.imgEyeOpenPass.setVisibility(true);

        if (isPasswordHidden) {
            this.view.imgEyeClosePass.setVisibility(true);
        } else {
            this.view.imgEyeClosePass.setVisibility(false);
        }
    } else {
        this.view.imgEyeOpenPass.setVisibility(false);
        this.view.imgEyeClosePass.setVisibility(false);
    }

    this.view.flxPasswordFooter.setVisibility(this.PasswordValidate());
},
  //Confirm PassWord OnTextChange Action!!!!
  tbxConfirmPassWordOnTextChangeAction: function(){
    // Show/hide eye icons based on text and secureTextEntry
    if (this.view.tbxConfirmPassWord.text.length > 0) {
      // User is typing
      this.view.imgEyeOpenConfirmPass.setVisibility(true);  // Always visible when typing

      if (this.view.tbxConfirmPassWord.secureTextEntry === true) {
        this.view.imgEyeCloseConfirmPass.setVisibility(true);  // Show cross if hidden
      } else {
        this.view.imgEyeCloseConfirmPass.setVisibility(false); // Hide cross if visible
      }
    } else {
      // No text typed
      this.view.imgEyeOpenConfirmPass.setVisibility(false);
      this.view.imgEyeCloseConfirmPass.setVisibility(false);
    }

    // Confirm Password Validation
    if (this.ConfirmPassValidate()) {
      this.view.lblPassWordShouldMatchConfirmPassword.setVisibility(false);
      // this.view.btnPassWordAndConfirmPassword.setVisibility(true);
    } else {
      this.view.lblPassWordShouldMatchConfirmPassword.setVisibility(true);
      // this.view.btnPassWordAndConfirmPassword.setVisibility(false);
    }

  },
  //OnClick Action for MaskText ON and OFF!!!
  flxEyeIconPassOnClickAction: function(){
    // Toggle the secureTextEntry property
    this.view.tbxPassWordName.secureTextEntry = !this.view.tbxPassWordName.secureTextEntry;
    // Update cross icon visibility based on new secureTextEntry state
    if (this.view.tbxPassWordName.secureTextEntry === true) {
      this.view.imgEyeClosePass.setVisibility(true);  // Show cross (password hidden)
    } else {
      this.view.imgEyeClosePass.setVisibility(false); // Hide cross (password visible)
    }

    // Eye open icon remains visible — no need to toggle it

  }, 	
  flxEyeIconConfirmPassOnClickAction: function(){  
    // Toggle secureTextEntry state
    this.view.tbxConfirmPassWord.secureTextEntry = !this.view.tbxConfirmPassWord.secureTextEntry;
    // Show or hide cross icon depending on the current visibility mode
    if (this.view.tbxConfirmPassWord.secureTextEntry === true) {
      this.view.imgEyeCloseConfirmPass.setVisibility(true);  // Show cross if hidden
    } else {
      this.view.imgEyeCloseConfirmPass.setVisibility(false); // Hide cross if visible
    }
    // No need to toggle imgEyeOpenConfirmPass – it stays visible while typing

  },
flxPasswordFooterOnClickAction: function(){
  this.view.flxPassWord.setVisibility(false);
  this.view.flxConfirmPasswordContainer.setVisibility(true);
},
  btnUploadYourDocOnClickAction: function(){
    //     this.view.flxPopupTradeForIndividual.setVisibility(true);
    this.view.flxFooterPopupSellerRegistrationForIndividual.bottom="-3%";
    this.view.flxPopupHowWouldYouUploadYourDoc.setVisibility(false);
    if(this.flagUploaded){
      this.view.lblUploadSignedDocs.text = "uploadedfile";
      this.view.flxCongratulationsSellerSeller.setVisibility(true);
    }
  },
  //Navigation from Password and Confirm Password to terms and conditions page!!!!
  btnPassWordAndConfirmPasswordOnClickAction:function(){
    if(this.PasswordValidate() && this.ConfirmPassValidate()){
      this.view.flxTermsAndConditions.setVisibility(true);
      this.view.flxPassWord.setVisibility(false);
      this.view.btnSaveAndContinue.setEnabled(false);
      this.view.btnSaveAndContinueForTermsNConditions.skin="sknbtnCPReg767676CstmBorder5pxFont70px";

    }
  },
  lblDownloadTermsAndConditionsOnTouchEndAction: function(){
    this.view.flxDownLoadTermsAndConditions.setVisibility(false);
    this.view.flxUploadedSignedDocs.setVisibility(true);
    this.view.flxIHaveRead.setVisibility(true);
  },
  lblUploadSignedDocsOnTouchEndAction: function(){
    //     this.view.flxTermsAndConditions.bottom="55%";
    //     this.view.flxPopupTradeForIndividual.setVisibility(false);
    this.view.flxFooterPopupSellerRegistrationForIndividual.bottom="-60%";
    this.view.flxPopupHowWouldYouUploadYourDoc.setVisibility(true);
    this.view.flxFooterPopupHowWouldUpload.bottom = "3%";
  },
  //Function to call "create user service" and enabling congratulations popup in this success call!!! 
  btnSaveAndContinueForTermsNConditionsOnClickAction: async function(){ 
    //     if(this.view.btnSaveAndContinueForTermsNConditions.skin==="sknlblBGd32437cstmBorderd324375pxFontCPRegffffff45px"){
    voltmx.application.showLoadingScreen();
    var self = this;
    var UserRegister_inputparam = {};
    var userRole = voltmx.store.getItem("userType");
    userRole=userRole.toLowerCase();
    var email= voltmx.store.getItem("email");
    var fullName = voltmx.store.getItem("fullName");
    //     var country_code = voltmx.store.getItem("country_code");
    var is_org = voltmx.store.getItem("is_org");
    //       alert("is_org:"+is_org);
    var reg_id =voltmx.store.getItem("regId");
    var user_Type = "IND";
    var mobile = voltmx.store.getItem("mobile");
    var  file_system_id =4;
    var url = "https://dev-hcltx.et.ae:443/services/ms_user_reg/create-user";
    var request = new voltmx.net.HttpRequest();
    request.open("POST", url);
    var username = "d6bebb28b79927d1c747ea19b028ceb4";
    var password = "5da9490e70d8f3201e20c4cf203961da";
    var credentials = username + ":" + password;
    //     var encodedValue = this.encodeToBase64(credentials);  
    // Setting Headers
    //request.setRequestHeader("Authorization", "Basic " + encodedValue);
    request.setRequestHeader("Content-Type", "application/json");
    request.setRequestHeader("Accept", "application/json");
    // Handling the response
    await new Promise((resolve, reject) => {
      request.onReadyStateChange = function () {
        if (request.readyState === 4) {
          if (request.status === 200 ) {
            //alert("✅ Success: " + request.responseText);
            voltmx.application.dismissLoadingScreen();
            var requestString = request.responseText;
            var requestJSON = JSON.parse(requestString);
            voltmx.print("requestJSON :"+requestJSON);
            // alert("opstatus : "+requestJSON.opstatus);
            //             var opstatusRes = requestJSON.opstatus;
            if( requestJSON && requestJSON.data && requestJSON.data.user_id !== null){
              if(is_org === true &&  requestJSON.statusCode === 200 && requestJSON.message ==="User created successfully."){
                voltmx.print("response in create user for with trade :"+JSON.stringify(requestJSON));
                if(userRole === "seller"){
                  self.view.flxCongratulationsSeller.setVisibility(true);
                  self.view.flxCongratulationsBuyer.setVisibility(false);
                }
                else{
                  self.view.flxCongratulationsBuyer.setVisibility(true);
                  self.view.flxCongratulationsSeller.setVisibility(false);
                }
                voltmx.store.setItem("isUserCreated", true);
              }
              else if(is_org === false &&  requestJSON.statusCode === 200 && requestJSON.message ==="User created successfully."){
                self.view.flxCongratulationsSeller.setVisibility(true);
                voltmx.print("response in create user for without trade :"+JSON.stringify(requestJSON));
                if(userRole === "seller"){
                  self.view.flxCongratulationsSeller.setVisibility(true);
                  self.view.flxCongratulationsBuyer.setVisibility(false);
                }
                else{
                  self.view.flxCongratulationsBuyer.setVisibility(true);
                  self.view.flxCongratulationsSeller.setVisibility(false);
                }
                voltmx.store.setItem("isUserCreated", true);
              }

            }
            else{
              voltmx.application.dismissLoadingScreen();
              voltmx.store.setItem("isUserCreated", false);
              alert("response error!!!");
            }
          } else {
            voltmx.application.dismissLoadingScreen();
            alert(" Failed: " + request.status + " - " + request.responseText);
            alert(" " + request.status + " - " + request.responseText.error.message);
          }
        }	
      };
      //   ============================================================================    


      // JSON Data
      var is_org = voltmx.store.getItem("is_org");
      //       alert("is_org:"+is_org);
      var expiryDate = new Date(self.view.calendarTradeLicenseExpiryDate.data);
      //       alert("expiryDate :"+expiryDate);
      var formattedExpiryDate = expiryDate.toISOString().split('T')[0]; // "YYYY-MM-DD"
      // alert("formattedExpiryDate :"+formattedExpiryDate)
      if(is_org !==  true){

        var jsonDataForWithoutTrade = JSON.stringify({
          "user_role" : userRole,
          "full_name" : fullName,
          "user_name" : self.view.tbxUserName.text,
          "password" : self.view.tbxPassWordName.text,
          "email" : email,
          "mobile_number": mobile,
          "reg_id": reg_id,
          //         "user_type" :user_Type ,
          "country_code":"+971",
          "file_system_id" : file_system_id,
        });
        // Sending Request
        request.send(jsonDataForWithoutTrade);
      }
      else{
        var jsonDataForTrade = JSON.stringify({
          "full_name": fullName,  
          "user_name": self.view.tbxUserName.text,  
          "password": self.view.tbxPassWordName.text,    
          "user_role": userRole,   
          "email": email,
          "mobile_number": mobile,  
          "country_code": "+971", 
          "reg_id": reg_id,   
          "file_system_id": 4, 
          "is_org":is_org , 
          "company_name":self.view.tbxCompanyAddress.text,
          "tax_registration_no": self.view.tbxTaxRegistrationNumber.text,  
          "trade_license_expiry_date":formattedExpiryDate,   
          "trade_license_number": self.view.tbxTradeLicenseNumber.text
        });
        request.send(jsonDataForTrade); 
      }
    });
  },


  //Disabling Congrats Popup and Navigating to Login Page!!!!
btnSaveAndContinueSellerOnClickAction: function(){
    this.view.flxCongratulationsSeller.setVisibility(false);
    var ntf = new voltmx.mvc.Navigation("frmLoginScreen");
    ntf.navigate();
},
  btnSaveAndContinueBuyerOnClick: function(){
  
    var ntf = new voltmx.mvc.Navigation("frmPaymentMethod");
    ntf.navigate();
  },
  flxUploadPopupClose: function(){
    this.view.flxPopupHowWouldYouUploadYourDoc.setVisibility(false);
    this.view.flxFooterPopupHowWouldUpload.bottom="3%";
    //     this.view.flxPopupTradeForIndividual.setVisibility(true);
    this.view.flxFooterPopupSellerRegistrationForIndividual.bottom="3%";
    this.view.flxTermsAndConditions.setVisibility(true);
  },
  //
  chxIhaveReadTermsNCondOnSelectionAction: function(){
    if(this.view.chxIhaveReadTermsNConds.selectedKeys === null){
      //  this.view.btnSaveAndContinueForTermsNConditions.setEnabled(false);
      this.view.btnSaveAndContinueForTermsNConditions.setVisibility(false);
      this.view.flxInnerBarPassConfo.width ="80%";
      //     this.view.btnSaveAndContinueForTermsNConditions.skin ="sknbtnBGa3a3a3CstmBorder5pxFontCPReg70px"
    }
    else{
      this.view.btnSaveAndContinueForTermsNConditions.setVisibility(true);
      //        this.view.btnSaveAndContinueForTermsNConditions.setEnabled(true);
      this.view.flxInnerBarPassConfo.width ="100%";
      //       this.view.btnSaveAndContinueForTermsNConditions.skin="sknlblBGd32437cstmBorderd324375pxFontCPRegffffff45px";
    }
  },
});