define("frmRegister2", function() {
    return function(controller) {
        function addWidgetsfrmRegister2() {
            this.setDefaultUnit(voltmx.flex.DP);
            var flxMain = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "100%",
                "id": "flxMain",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "sknFlxBasic",
                "top": "0",
                "width": "100%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxMain.setDefaultUnit(voltmx.flex.DP);
            var flxSellerOrBuyerMain = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "100%",
                "id": "flxSellerOrBuyerMain",
                "isVisible": false,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "sknFlxBasic",
                "top": "0",
                "width": "100%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxSellerOrBuyerMain.setDefaultUnit(voltmx.flex.DP);
            var HeaderRegister = new com.hcl.voltmx.alwataneya1.HeaderRegister1({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "height": "10%",
                "id": "HeaderRegister",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0",
                "masterType": constants.MASTER_TYPE_DEFAULT,
                "isModalContainer": false,
                "skin": "CopyslFbox0a9831affa2094b",
                "top": 0,
                "width": "100%",
                "appName": "AlwataneyaAuction",
                "overrides": {
                    "imgAWA": {
                        "src": "logo_1_4.png"
                    },
                    "imgBack": {
                        "isVisible": true,
                        "src": "vector__1_1.png"
                    }
                }
            }, {
                "paddingInPixel": false,
                "overrides": {}
            }, {
                "overrides": {}
            });
            var flxBarContainerSellerOrBuyer = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": false,
                "height": "5%",
                "id": "flxBarContainerSellerOrBuyer",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "90dp",
                "width": "85%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxBarContainerSellerOrBuyer.setDefaultUnit(voltmx.flex.DP);
            var flxBarSellerOrBuyer = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": false,
                "height": "25%",
                "id": "flxBarSellerOrBuyer",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "top": "0",
                "width": "100%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxBarSellerOrBuyer.setDefaultUnit(voltmx.flex.DP);
            var flxInnerBarSellerOrBuyer = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "100%",
                "id": "flxInnerBarSellerOrBuyer",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "sknflxBG0077baRoundedBorder0077ba1px",
                "top": "0",
                "width": "10%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxInnerBarSellerOrBuyer.setDefaultUnit(voltmx.flex.DP);
            flxInnerBarSellerOrBuyer.add();
            flxBarSellerOrBuyer.add(flxInnerBarSellerOrBuyer);
            flxBarContainerSellerOrBuyer.add(flxBarSellerOrBuyer);
            var flxBody = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "250dp",
                "id": "flxBody",
                "isVisible": true,
                "layoutType": voltmx.flex.FLOW_VERTICAL,
                "left": "0",
                "isModalContainer": false,
                "skin": "sknFlxBasic",
                "top": "150dp",
                "width": "100%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxBody.setDefaultUnit(voltmx.flex.DP);
            var flx1 = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": false,
                "height": "45%",
                "id": "flx1",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxBasic",
                "top": "0dp",
                "width": "90%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flx1.setDefaultUnit(voltmx.flex.DP);
            var imgUser = new voltmx.ui.Image2({
                "height": "50%",
                "id": "imgUser",
                "isVisible": true,
                "left": "0",
                "skin": "CopyslImage0bce6b78d7c284f",
                "src": "solar_user_outline_1.png",
                "top": "0",
                "width": "60dp"
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var flxUserHead = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "centerX": "50%",
                "clipBounds": false,
                "height": "50%",
                "id": "flxUserHead",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "sknFlxBasic",
                "width": "90%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxUserHead.setDefaultUnit(voltmx.flex.DP);
            var lblIm = new voltmx.ui.Label({
                "centerY": "50%",
                "height": "80%",
                "id": "lblIm",
                "isVisible": true,
                "left": "0",
                "skin": "sknlblDubaiReg231F20Font84px",
                "text": "I'm",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "width": "20%"
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblUserFullName = new voltmx.ui.Label({
                "centerY": "50%",
                "height": "80%",
                "id": "lblUserFullName",
                "isVisible": true,
                "left": "15%",
                "skin": "sknlblDubaiBold0077BAFont84px",
                "text": "John Smith",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "width": voltmx.flex.USE_PREFERRED_SIZE
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxUserHead.add(lblIm, lblUserFullName);
            flx1.add(imgUser, flxUserHead);
            var flx2 = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "bottom": "40%",
                "centerX": "50%",
                "clipBounds": false,
                "height": "28%",
                "id": "flx2",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "sknFlxBasic",
                "top": 15,
                "width": "88%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flx2.setDefaultUnit(voltmx.flex.DP);
            var flxIm = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "80%",
                "id": "flxIm",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "sknFlxBasic",
                "top": "0",
                "width": "100%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxIm.setDefaultUnit(voltmx.flex.DP);
            var lblIma = new voltmx.ui.Label({
                "centerY": "50%",
                "height": "80%",
                "id": "lblIma",
                "isVisible": true,
                "left": "5dp",
                "skin": "sknlblDubaiReg231F20Font84px",
                "text": "I am a ",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "width": "25%"
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var imgDropDown = new voltmx.ui.Image2({
                "centerY": "50%",
                "height": "60%",
                "id": "imgDropDown",
                "isVisible": true,
                "right": 10,
                "skin": "CopyslImage0bce6b78d7c284f",
                "src": "vector1_1.png",
                "top": "0",
                "width": "18%"
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblSellerOrBuyer = new voltmx.ui.Label({
                "centerX": "38%",
                "centerY": "50%",
                "height": "80%",
                "id": "lblSellerOrBuyer",
                "isVisible": true,
                "left": "0",
                "skin": "sknlblDubaiReg231F20Font84px",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "width": "25%"
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxIm.add(lblIma, imgDropDown, lblSellerOrBuyer);
            var flxBottomLine = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "bottom": "11dp",
                "clipBounds": false,
                "height": "3%",
                "id": "flxBottomLine",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "sknflxBGdcdcdcplainborderdcdcdc1px1px",
                "width": "100%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxBottomLine.setDefaultUnit(voltmx.flex.DP);
            flxBottomLine.add();
            flx2.add(flxIm, flxBottomLine);
            flxBody.add(flx1, flx2);
            var flxFooter = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "bottom": "100dp",
                "centerX": "50%",
                "clipBounds": false,
                "height": "70dp",
                "id": "flxFooter",
                "isVisible": false,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "CopyslFbox0a9831affa2094b",
                "width": "90%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxFooter.setDefaultUnit(voltmx.flex.DP);
            var imgNext = new voltmx.ui.Image2({
                "height": "90%",
                "id": "imgNext",
                "isVisible": true,
                "right": "0dp",
                "skin": "CopyslImage0bce6b78d7c284f",
                "src": "group_13213151762.png",
                "top": "0",
                "width": "25%"
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxFooter.add(imgNext);
            flxSellerOrBuyerMain.add(HeaderRegister, flxBarContainerSellerOrBuyer, flxBody, flxFooter);
            var flxPopupSellerOrBuyer = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "bottom": "-20dp",
                "clipBounds": false,
                "height": "100%",
                "id": "flxPopupSellerOrBuyer",
                "isVisible": false,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "sknFlxBasic",
                "top": "0",
                "width": "100%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxPopupSellerOrBuyer.setDefaultUnit(voltmx.flex.DP);
            var flxPopupFromFooter = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "bottom": "-4%",
                "clipBounds": true,
                "height": "340dp",
                "id": "flxPopupFromFooter",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "sknflxBGffffffopacity100perBorder1pxBlur5px",
                "width": "100%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxPopupFromFooter.setDefaultUnit(voltmx.flex.DP);
            var flxTop = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "20%",
                "id": "flxTop",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "sknFlxBasic",
                "top": "10dp",
                "width": "100%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxTop.setDefaultUnit(voltmx.flex.DP);
            var lblRegisterAs = new voltmx.ui.Label({
                "centerY": "45%",
                "id": "lblRegisterAs",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknlblDubaiBold000000Font70px",
                "text": "I want to register as a ",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "width": "70%"
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var flxToggles = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "centerY": "72%",
                "clipBounds": false,
                "height": "15%",
                "id": "flxToggles",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0",
                "width": "90%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxToggles.setDefaultUnit(voltmx.flex.DP);
            var flxToggle1 = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "bottom": "0",
                "centerY": "50%",
                "clipBounds": false,
                "height": "80%",
                "id": "flxToggle1",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": 2,
                "isModalContainer": false,
                "skin": "sknflxBgD32437PlainBorderD324371px",
                "width": "16%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxToggle1.setDefaultUnit(voltmx.flex.DP);
            flxToggle1.add();
            var flxToggle2 = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "centerX": "20.50%",
                "centerY": "50%",
                "clipBounds": false,
                "height": "80%",
                "id": "flxToggle2",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "top": "0",
                "width": "6%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxToggle2.setDefaultUnit(voltmx.flex.DP);
            flxToggle2.add();
            flxToggles.add(flxToggle1, flxToggle2);
            flxTop.add(lblRegisterAs, flxToggles);
            var flxSeller = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": false,
                "height": "17%",
                "id": "flxSeller",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "sknflxCustomRoundedCCCCCC",
                "top": "80dp",
                "width": "90%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxSeller.setDefaultUnit(voltmx.flex.DP);
            var lblSeller = new voltmx.ui.Label({
                "centerY": "50%",
                "id": "lblSeller",
                "isVisible": true,
                "left": "0",
                "skin": "sknlblDubaiReg000000Font70px",
                "text": "Seller",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "width": "30%"
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var radiobtnSeller = new voltmx.ui.RadioButtonGroup({
                "centerY": "50%",
                "height": "50%",
                "id": "radiobtnSeller",
                "isVisible": true,
                "masterData": [
                    ["Seller", "s"]
                ],
                "right": 10,
                "skin": "sknradiobtnRegistrationTrade",
                "top": "0",
                "width": "12%"
            }, {
                "itemOrientation": constants.RADIOGROUP_ITEM_ORIENTATION_VERTICAL,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "tickedImage": "selectedradio.png",
                "untickedImage": "unselectedradio.png"
            });
            flxSeller.add(lblSeller, radiobtnSeller);
            var flxBuyer = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "centerY": "53%",
                "clipBounds": false,
                "height": "17%",
                "id": "flxBuyer",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "sknflxCustomRoundedCCCCCC",
                "top": "30dp",
                "width": "90%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxBuyer.setDefaultUnit(voltmx.flex.DP);
            var lblBuyer = new voltmx.ui.Label({
                "centerY": "50%",
                "id": "lblBuyer",
                "isVisible": true,
                "left": "0",
                "skin": "sknlblDubaiReg000000Font70px",
                "text": "Buyer",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "width": "30%"
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var radiobtnBuyer = new voltmx.ui.RadioButtonGroup({
                "centerY": "50%",
                "height": "50%",
                "id": "radiobtnBuyer",
                "isVisible": true,
                "masterData": [
                    ["Buyer", "b"]
                ],
                "right": 10,
                "skin": "CopyCopyslRadioButtonGroup1",
                "top": "0",
                "width": "12%"
            }, {
                "itemOrientation": constants.RADIOGROUP_ITEM_ORIENTATION_VERTICAL,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "tickedImage": "selectedradio.png",
                "untickedImage": "unselectedradio.png"
            });
            flxBuyer.add(lblBuyer, radiobtnBuyer);
            var btnSaveAndContinue = new voltmx.ui.Button({
                "bottom": "45dp",
                "centerX": "50%",
                "focusSkin": "CopysknbtnCPReg",
                "height": "18%",
                "id": "btnSaveAndContinue",
                "isVisible": true,
                "left": "0",
                "text": "Save and Continue",
                "width": "90%"
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxPopupFromFooter.add(flxTop, flxSeller, flxBuyer, btnSaveAndContinue);
            var flxSellerOrBuyerFooterPopup = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "bottom": "-2%",
                "centerX": "50%",
                "clipBounds": false,
                "height": "340dp",
                "id": "flxSellerOrBuyerFooterPopup",
                "isVisible": false,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "10dp",
                "isModalContainer": false,
                "skin": "sknflxBGffffffopacity100perBorder1pxBlur5px",
                "width": "100%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxSellerOrBuyerFooterPopup.setDefaultUnit(voltmx.flex.DP);
            var flxIWantToRegister = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "20%",
                "id": "flxIWantToRegister",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "CopyslFbox0a9831affa2094b",
                "top": "10dp",
                "width": "100%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxIWantToRegister.setDefaultUnit(voltmx.flex.DP);
            var lblRegisterAsTradeLicense = new voltmx.ui.Label({
                "centerY": "50%",
                "id": "lblRegisterAsTradeLicense",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknlblDubaiBold000000Font70px",
                "text": "I want to Register as a ",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "width": voltmx.flex.USE_PREFERRED_SIZE
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxIWantToRegister.add(lblRegisterAsTradeLicense);
            var radiobtnGroupSellerOrBuyer = new voltmx.ui.RadioButtonGroup({
                "centerX": "49.35%",
                "centerY": "45.10%",
                "height": "30%",
                "id": "radiobtnGroupSellerOrBuyer",
                "isVisible": true,
                "left": "0",
                "masterData": [
                    ["seller", "Seller"],
                    ["buyer", "Buyer"]
                ],
                "skin": "sknrdioCPReg000000Font60px",
                "top": "0",
                "width": "60%"
            }, {
                "itemOrientation": constants.RADIOGROUP_ITEM_ORIENTATION_VERTICAL,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "tickedImage": "radio_button__3_1_1.png",
                "untickedImage": "radio_button__2__1.png"
            });
            var btnSaveAndContinueSellerOrBuyer = new voltmx.ui.Button({
                "bottom": "45dp",
                "centerX": "50%",
                "focusSkin": "CopysknbtnCPReg",
                "height": "18%",
                "id": "btnSaveAndContinueSellerOrBuyer",
                "isVisible": true,
                "left": "0",
                "skin": "CopysknbtnCPReg",
                "text": "Save and Continue",
                "width": "90%"
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxSellerOrBuyerFooterPopup.add(flxIWantToRegister, radiobtnGroupSellerOrBuyer, btnSaveAndContinueSellerOrBuyer);
            var flxClosePopup = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "55%",
                "id": "flxClosePopup",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "CopyslFbox0a9831affa2094b",
                "top": "0",
                "width": "100%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxClosePopup.setDefaultUnit(voltmx.flex.DP);
            flxClosePopup.add();
            flxPopupSellerOrBuyer.add(flxPopupFromFooter, flxSellerOrBuyerFooterPopup, flxClosePopup);
            var flxPopupTrade = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "bottom": "-20dp",
                "centerX": "50%",
                "centerY": "50%",
                "clipBounds": false,
                "height": "100%",
                "id": "flxPopupTrade",
                "isVisible": false,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "10dp",
                "isModalContainer": false,
                "skin": "sknflxBG000000Opacity50per",
                "top": "10dp",
                "width": "100%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxPopupTrade.setDefaultUnit(voltmx.flex.DP);
            var flxPopupRegister = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "bottom": "-4%",
                "clipBounds": false,
                "height": "350dp",
                "id": "flxPopupRegister",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "sknflxBGffffffopacity100perBorder1pxBlur5px",
                "width": "100%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxPopupRegister.setDefaultUnit(voltmx.flex.DP);
            var flxRegisterTop = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "16%",
                "id": "flxRegisterTop",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "CopyslFbox0a9831affa2094b",
                "top": "10dp",
                "width": "100%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxRegisterTop.setDefaultUnit(voltmx.flex.DP);
            var lblSellerRegister = new voltmx.ui.Label({
                "centerX": "43%",
                "height": "60%",
                "id": "lblSellerRegister",
                "isVisible": true,
                "skin": "sknlblDubaiBold000000Font70px",
                "text": " Registration",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": 10,
                "width": "80%"
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var flxTogglesTrade = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "centerX": "44%",
                "centerY": "85%",
                "clipBounds": false,
                "height": "15%",
                "id": "flxTogglesTrade",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0",
                "width": "80%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxTogglesTrade.setDefaultUnit(voltmx.flex.DP);
            var CopyflxToggle0a25bf5584b4d4d = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "bottom": "0",
                "centerY": "50%",
                "clipBounds": false,
                "height": "80%",
                "id": "CopyflxToggle0a25bf5584b4d4d",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": 2,
                "isModalContainer": false,
                "skin": "sknflxBgD32437PlainBorderD324371px",
                "width": "16%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            CopyflxToggle0a25bf5584b4d4d.setDefaultUnit(voltmx.flex.DP);
            CopyflxToggle0a25bf5584b4d4d.add();
            var CopyflxToggle0ca5e631b1e5b48 = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "centerX": "20.50%",
                "centerY": "50%",
                "clipBounds": false,
                "height": "80%",
                "id": "CopyflxToggle0ca5e631b1e5b48",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "top": "0",
                "width": "6%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            CopyflxToggle0ca5e631b1e5b48.setDefaultUnit(voltmx.flex.DP);
            CopyflxToggle0ca5e631b1e5b48.add();
            flxTogglesTrade.add(CopyflxToggle0a25bf5584b4d4d, CopyflxToggle0ca5e631b1e5b48);
            flxRegisterTop.add(lblSellerRegister, flxTogglesTrade);
            var flxWithoutTrade = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": false,
                "height": "17%",
                "id": "flxWithoutTrade",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "sknflxCustomRoundedCCCCCC",
                "top": "80dp",
                "width": "90%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxWithoutTrade.setDefaultUnit(voltmx.flex.DP);
            var lblWithoutTrade = new voltmx.ui.Label({
                "centerY": "50%",
                "id": "lblWithoutTrade",
                "isVisible": true,
                "left": "0",
                "skin": "sknlblDubaiRegFont8a8a8aSize50px",
                "text": "For Individuals Without Trade Liscense",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "width": "88%"
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var radioBtnWithoutTrade = new voltmx.ui.RadioButtonGroup({
                "centerY": "50%",
                "height": "50%",
                "id": "radioBtnWithoutTrade",
                "isVisible": true,
                "masterData": [
                    ["WithoutTrade", "w"]
                ],
                "right": 3,
                "skin": "sknradiobtnRegistrationTrade",
                "top": "0",
                "width": "12%"
            }, {
                "itemOrientation": constants.RADIOGROUP_ITEM_ORIENTATION_VERTICAL,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "tickedImage": "selectedradio.png",
                "untickedImage": "unselectedradio.png"
            });
            flxWithoutTrade.add(lblWithoutTrade, radioBtnWithoutTrade);
            var flxWithTrade = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "centerY": "53%",
                "clipBounds": false,
                "height": "17%",
                "id": "flxWithTrade",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "sknflxCustomRoundedCCCCCC",
                "top": "30dp",
                "width": "90%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxWithTrade.setDefaultUnit(voltmx.flex.DP);
            var lblWithTrade = new voltmx.ui.Label({
                "centerY": "50%",
                "id": "lblWithTrade",
                "isVisible": true,
                "left": "0",
                "skin": "sknlblDubaiRegFont8a8a8aSize50px",
                "text": "For Companies with Trade License",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "width": "80%"
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var radioBtnWithTrade = new voltmx.ui.RadioButtonGroup({
                "centerY": "50%",
                "height": "50%",
                "id": "radioBtnWithTrade",
                "isVisible": true,
                "masterData": [
                    ["WithTrade", "t"]
                ],
                "right": 3,
                "skin": "CopyCopyslRadioButtonGroup1",
                "top": "0",
                "width": "12%"
            }, {
                "itemOrientation": constants.RADIOGROUP_ITEM_ORIENTATION_VERTICAL,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "tickedImage": "selectedradio.png",
                "untickedImage": "unselectedradio.png"
            });
            flxWithTrade.add(lblWithTrade, radioBtnWithTrade);
            var btnTradeSaveAandContinue = new voltmx.ui.Button({
                "bottom": "46dp",
                "centerX": "50%",
                "height": "17%",
                "id": "btnTradeSaveAandContinue",
                "isVisible": true,
                "left": "0",
                "text": "Save and Continue",
                "width": "90%"
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxPopupRegister.add(flxRegisterTop, flxWithoutTrade, flxWithTrade, btnTradeSaveAandContinue);
            var flxSellerRegisterPopupClose = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "55%",
                "id": "flxSellerRegisterPopupClose",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "CopyslFbox0a9831affa2094b",
                "top": "0",
                "width": "100%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxSellerRegisterPopupClose.setDefaultUnit(voltmx.flex.DP);
            flxSellerRegisterPopupClose.add();
            flxPopupTrade.add(flxPopupRegister, flxSellerRegisterPopupClose);
            var flxEmailContainer = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "centerY": "50%",
                "clipBounds": false,
                "height": "100%",
                "id": "flxEmailContainer",
                "isVisible": false,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "CopyslFbox0a9831affa2094b",
                "top": "0",
                "width": "100%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxEmailContainer.setDefaultUnit(voltmx.flex.DP);
            var flxEmail = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": false,
                "height": "300dp",
                "id": "flxEmail",
                "isVisible": true,
                "layoutType": voltmx.flex.FLOW_VERTICAL,
                "left": "10dp",
                "isModalContainer": false,
                "skin": "CopyslFbox0a9831affa2094b",
                "top": "150dp",
                "width": "100%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxEmail.setDefaultUnit(voltmx.flex.DP);
            var flxEmailId = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": false,
                "height": "100dp",
                "id": "flxEmailId",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "CopyslFbox0a9831affa2094b",
                "top": "0dp",
                "width": "90%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxEmailId.setDefaultUnit(voltmx.flex.DP);
            var imgMail = new voltmx.ui.Image2({
                "height": "50%",
                "id": "imgMail",
                "isVisible": true,
                "left": "0",
                "skin": "CopyslImage0bce6b78d7c284f",
                "src": "solar_user_outline_1.png",
                "top": "0",
                "width": "60dp"
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var flxSigningUpWith = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "centerX": "50%",
                "clipBounds": false,
                "height": "50%",
                "id": "flxSigningUpWith",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "CopyslFbox0a9831affa2094b",
                "width": "90%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxSigningUpWith.setDefaultUnit(voltmx.flex.DP);
            var lblImSigningUpWith = new voltmx.ui.Label({
                "centerY": "50%",
                "height": "80%",
                "id": "lblImSigningUpWith",
                "isVisible": true,
                "left": "0",
                "skin": "sknlblDubaiReg231F20Font84px",
                "text": "I'm signing up with",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "width": "90%"
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxSigningUpWith.add(lblImSigningUpWith);
            flxEmailId.add(imgMail, flxSigningUpWith);
            var flxEmailTextBox = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "bottom": "45%",
                "centerX": "50%",
                "clipBounds": false,
                "height": "100dp",
                "id": "flxEmailTextBox",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "CopyslFbox0a9831affa2094b",
                "top": "0dp",
                "width": "88%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxEmailTextBox.setDefaultUnit(voltmx.flex.DP);
            var tbxEmailAddress = new voltmx.ui.TextBox2({
                "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
                "focusSkin": "skntbxBGffffffDubaiReg231f20Font50px",
                "height": "55%",
                "id": "tbxEmailAddress",
                "isVisible": true,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
                "left": "0",
                "placeholder": "Your Email",
                "secureTextEntry": false,
                "skin": "skntbxBGffffffDubaiReg231f20Font50px",
                "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
                "top": "0",
                "width": "100%"
            }, {
                "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [3, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "autoFilter": false,
                "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DEFAULT,
                "placeholderSkin": "skntxtplhrCPReg8391a1Font80px",
                "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
            });
            var flxBottomLineEmail = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "centerY": "60%",
                "clipBounds": false,
                "height": "3%",
                "id": "flxBottomLineEmail",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "sknflxBGdcdcdcplainborderdcdcdc1px1px",
                "width": "93%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxBottomLineEmail.setDefaultUnit(voltmx.flex.DP);
            flxBottomLineEmail.add();
            var EmailVerifyConfirmation = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "bottom": "10dp",
                "centerX": "50%",
                "clipBounds": false,
                "height": "25dp",
                "id": "EmailVerifyConfirmation",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "CopyslFbox0a9831affa2094b",
                "width": "95%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            EmailVerifyConfirmation.setDefaultUnit(voltmx.flex.DP);
            var lblVerifyConfirmation = new voltmx.ui.Label({
                "centerY": "50%",
                "height": "90%",
                "id": "lblVerifyConfirmation",
                "isVisible": true,
                "left": "0",
                "skin": "sknlblDubaiLtFont7e7e7e45px",
                "text": "We'll  send a verification code to this mail",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "width": "90%"
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            EmailVerifyConfirmation.add(lblVerifyConfirmation);
            flxEmailTextBox.add(tbxEmailAddress, flxBottomLineEmail, EmailVerifyConfirmation);
            var flxEmailError = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "bottom": "70dp",
                "clipBounds": false,
                "height": "30dp",
                "id": "flxEmailError",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "25dp",
                "isModalContainer": false,
                "skin": "CopyslFbox0a9831affa2094b",
                "top": -120,
                "width": "40%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxEmailError.setDefaultUnit(voltmx.flex.DP);
            var lblEmailError = new voltmx.ui.Label({
                "centerX": "50%",
                "centerY": "50%",
                "height": "70%",
                "id": "lblEmailError",
                "isVisible": true,
                "left": "0",
                "skin": "sknlblDubaiRegff0000Font40px",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "0",
                "width": "100%"
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxEmailError.add(lblEmailError);
            flxEmail.add(flxEmailId, flxEmailTextBox, flxEmailError);
            var flxEmailFooter = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "bottom": "30%",
                "centerX": "50%",
                "clipBounds": false,
                "height": "90dp",
                "id": "flxEmailFooter",
                "isVisible": false,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "CopyslFbox0a9831affa2094b",
                "width": "85%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxEmailFooter.setDefaultUnit(voltmx.flex.DP);
            var imgNextInEmail = new voltmx.ui.Image2({
                "height": "90%",
                "id": "imgNextInEmail",
                "isVisible": true,
                "right": "0dp",
                "skin": "CopyslImage0bce6b78d7c284f",
                "src": "group_13213151762.png",
                "top": "0",
                "width": "25%"
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxEmailFooter.add(imgNextInEmail);
            var HeaderRegisterForEmail = new com.hcl.voltmx.alwataneya1.HeaderRegister1({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "height": "100dp",
                "id": "HeaderRegisterForEmail",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0",
                "masterType": constants.MASTER_TYPE_DEFAULT,
                "isModalContainer": false,
                "skin": "CopyslFbox0a9831affa2094b",
                "top": 0,
                "width": "100%",
                "appName": "AlwataneyaAuction",
                "overrides": {
                    "HeaderRegister1": {
                        "height": "100dp"
                    },
                    "imgAWA": {
                        "src": "logo_1_4.png"
                    },
                    "imgBack": {
                        "isVisible": true,
                        "src": "vector__1_1.png"
                    }
                }
            }, {
                "paddingInPixel": false,
                "overrides": {}
            }, {
                "overrides": {}
            });
            var flxBarContainerEmail = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": false,
                "height": "5%",
                "id": "flxBarContainerEmail",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "90dp",
                "width": "85%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxBarContainerEmail.setDefaultUnit(voltmx.flex.DP);
            var flxBarEmail = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": false,
                "height": "25%",
                "id": "flxBarEmail",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "top": "0",
                "width": "100%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxBarEmail.setDefaultUnit(voltmx.flex.DP);
            var flxInnerBarEmail = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "100%",
                "id": "flxInnerBarEmail",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "sknflxBG0077baRoundedBorder0077ba1px",
                "top": "0",
                "width": "30%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxInnerBarEmail.setDefaultUnit(voltmx.flex.DP);
            flxInnerBarEmail.add();
            flxBarEmail.add(flxInnerBarEmail);
            flxBarContainerEmail.add(flxBarEmail);
            flxEmailContainer.add(flxEmail, flxEmailFooter, HeaderRegisterForEmail, flxBarContainerEmail);
            var flxCompanyName = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "centerY": "50%",
                "clipBounds": false,
                "height": "100%",
                "id": "flxCompanyName",
                "isVisible": false,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "CopyslFbox0a9831affa2094b",
                "top": "0",
                "width": "100%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxCompanyName.setDefaultUnit(voltmx.flex.DP);
            var flxCompany = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": false,
                "height": "300dp",
                "id": "flxCompany",
                "isVisible": true,
                "layoutType": voltmx.flex.FLOW_VERTICAL,
                "left": "10dp",
                "isModalContainer": false,
                "skin": "CopyslFbox0a9831affa2094b",
                "top": "150dp",
                "width": "100%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxCompany.setDefaultUnit(voltmx.flex.DP);
            var flxCompanyHeading = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": false,
                "height": "130dp",
                "id": "flxCompanyHeading",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "CopyslFbox0a9831affa2094b",
                "top": "0dp",
                "width": "88%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxCompanyHeading.setDefaultUnit(voltmx.flex.DP);
            var imgCompany = new voltmx.ui.Image2({
                "height": "40%",
                "id": "imgCompany",
                "isVisible": true,
                "left": "0",
                "skin": "CopyslImage0bce6b78d7c284f",
                "src": "companylogo.png",
                "top": "0",
                "width": "60dp"
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var flxEnterYourCompanyName = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": false,
                "height": "60%",
                "id": "flxEnterYourCompanyName",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "10dp",
                "isModalContainer": false,
                "skin": "CopyslFbox0a9831affa2094b",
                "width": "90%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxEnterYourCompanyName.setDefaultUnit(voltmx.flex.DP);
            var lblEnterYourCompanyName = new voltmx.ui.Label({
                "centerY": "50%",
                "height": "100%",
                "id": "lblEnterYourCompanyName",
                "isVisible": true,
                "left": "0",
                "skin": "sknlblDubaiReg231F20Font84px",
                "text": "Enter your company \nname",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "width": "90%"
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxEnterYourCompanyName.add(lblEnterYourCompanyName);
            flxCompanyHeading.add(imgCompany, flxEnterYourCompanyName);
            var flxCompanyTextBox = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "bottom": "45%",
                "centerX": "50%",
                "clipBounds": false,
                "height": "100dp",
                "id": "flxCompanyTextBox",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "CopyslFbox0a9831affa2094b",
                "top": "0dp",
                "width": "88%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxCompanyTextBox.setDefaultUnit(voltmx.flex.DP);
            var tbxCompanyAddress = new voltmx.ui.TextBox2({
                "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
                "focusSkin": "skntbxBGffffffDubaiReg231f20Font50px",
                "height": "55%",
                "id": "tbxCompanyAddress",
                "isVisible": true,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
                "left": "0",
                "placeholder": "Company Name",
                "secureTextEntry": false,
                "skin": "skntbxBGffffffDubaiReg231f20Font50px",
                "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
                "top": "0",
                "width": "100%"
            }, {
                "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [3, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "autoFilter": false,
                "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DEFAULT,
                "placeholderSkin": "skntxtplhrCPReg8391a1Font80px",
                "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
            });
            var flxBottomLineCompany = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "centerY": "60%",
                "clipBounds": false,
                "height": "3%",
                "id": "flxBottomLineCompany",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "sknflxBGdcdcdcplainborderdcdcdc1px1px",
                "width": "93%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxBottomLineCompany.setDefaultUnit(voltmx.flex.DP);
            flxBottomLineCompany.add();
            flxCompanyTextBox.add(tbxCompanyAddress, flxBottomLineCompany);
            var flxCompanyError = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "bottom": "70dp",
                "clipBounds": false,
                "height": "30dp",
                "id": "flxCompanyError",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "25dp",
                "isModalContainer": false,
                "skin": "sknFlxBasic",
                "top": -120,
                "width": "40%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxCompanyError.setDefaultUnit(voltmx.flex.DP);
            var lblCompanyError = new voltmx.ui.Label({
                "centerX": "50%",
                "centerY": "50%",
                "height": "70%",
                "id": "lblCompanyError",
                "isVisible": true,
                "left": "0",
                "skin": "sknlblDubaiRegff0000Font40px",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "0",
                "width": "100%"
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxCompanyError.add(lblCompanyError);
            flxCompany.add(flxCompanyHeading, flxCompanyTextBox, flxCompanyError);
            var flxCompanyFooter = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "bottom": "30%",
                "centerX": "50%",
                "clipBounds": false,
                "height": "90dp",
                "id": "flxCompanyFooter",
                "isVisible": false,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "sknFlxBasic",
                "width": "85%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxCompanyFooter.setDefaultUnit(voltmx.flex.DP);
            var imgNextInCompanyName = new voltmx.ui.Image2({
                "height": "90%",
                "id": "imgNextInCompanyName",
                "isVisible": true,
                "right": "0dp",
                "skin": "CopyslImage0bce6b78d7c284f",
                "src": "group_13213151762.png",
                "top": "0",
                "width": "25%"
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxCompanyFooter.add(imgNextInCompanyName);
            var HeaderRegisterForCompany = new com.hcl.voltmx.alwataneya1.HeaderRegister1({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "height": "100dp",
                "id": "HeaderRegisterForCompany",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0",
                "masterType": constants.MASTER_TYPE_DEFAULT,
                "isModalContainer": false,
                "skin": "CopyslFbox0a9831affa2094b",
                "top": 0,
                "width": "100%",
                "appName": "AlwataneyaAuction",
                "overrides": {
                    "HeaderRegister1": {
                        "height": "100dp"
                    },
                    "imgAWA": {
                        "src": "logo_1_4.png"
                    },
                    "imgBack": {
                        "isVisible": true,
                        "src": "vector__1_1.png"
                    }
                }
            }, {
                "paddingInPixel": false,
                "overrides": {}
            }, {
                "overrides": {}
            });
            var flxBarContainerCompany = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": false,
                "height": "5%",
                "id": "flxBarContainerCompany",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "90dp",
                "width": "85%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxBarContainerCompany.setDefaultUnit(voltmx.flex.DP);
            var flxCompanyBar = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": false,
                "height": "25%",
                "id": "flxCompanyBar",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "sknflxBGDFDFDFRoundedBorderDFDFDF1px",
                "top": "0",
                "width": "100%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxCompanyBar.setDefaultUnit(voltmx.flex.DP);
            var flxInnerBarCompany = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "100%",
                "id": "flxInnerBarCompany",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "sknflxBG0077baRoundedBorder0077ba1px",
                "top": "0",
                "width": "32%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxInnerBarCompany.setDefaultUnit(voltmx.flex.DP);
            flxInnerBarCompany.add();
            flxCompanyBar.add(flxInnerBarCompany);
            flxBarContainerCompany.add(flxCompanyBar);
            flxCompanyName.add(flxCompany, flxCompanyFooter, HeaderRegisterForCompany, flxBarContainerCompany);
            var flxTradeLicense = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "centerY": "50%",
                "clipBounds": false,
                "height": "100%",
                "id": "flxTradeLicense",
                "isVisible": false,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "CopyslFbox0a9831affa2094b",
                "top": "0",
                "width": "100%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxTradeLicense.setDefaultUnit(voltmx.flex.DP);
            var HeaderRegisterForTradeLicense = new com.hcl.voltmx.alwataneya1.HeaderRegister1({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "height": "100dp",
                "id": "HeaderRegisterForTradeLicense",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0",
                "masterType": constants.MASTER_TYPE_DEFAULT,
                "isModalContainer": false,
                "skin": "CopyslFbox0a9831affa2094b",
                "top": 0,
                "width": "100%",
                "appName": "AlwataneyaAuction",
                "overrides": {
                    "HeaderRegister1": {
                        "height": "100dp"
                    },
                    "imgAWA": {
                        "src": "logo_1_4.png"
                    },
                    "imgBack": {
                        "isVisible": true,
                        "src": "vector__1_1.png"
                    }
                }
            }, {
                "paddingInPixel": false,
                "overrides": {}
            }, {
                "overrides": {}
            });
            var flxBarContainerTradeLicense = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": false,
                "height": "5%",
                "id": "flxBarContainerTradeLicense",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "90dp",
                "width": "85%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxBarContainerTradeLicense.setDefaultUnit(voltmx.flex.DP);
            var flxTradeLicenseBar = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": false,
                "height": "25%",
                "id": "flxTradeLicenseBar",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "sknflxBGDFDFDFRoundedBorderDFDFDF1px",
                "top": "0",
                "width": "100%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxTradeLicenseBar.setDefaultUnit(voltmx.flex.DP);
            var flxInnerBarTradeLicense = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "100%",
                "id": "flxInnerBarTradeLicense",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "sknflxBG0077baRoundedBorder0077ba1px",
                "top": "0",
                "width": "32%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxInnerBarTradeLicense.setDefaultUnit(voltmx.flex.DP);
            flxInnerBarTradeLicense.add();
            flxTradeLicenseBar.add(flxInnerBarTradeLicense);
            flxBarContainerTradeLicense.add(flxTradeLicenseBar);
            var flxTradeLicenseBody = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": false,
                "height": "300dp",
                "id": "flxTradeLicenseBody",
                "isVisible": true,
                "layoutType": voltmx.flex.FLOW_VERTICAL,
                "left": "10dp",
                "isModalContainer": false,
                "skin": "CopyslFbox0a9831affa2094b",
                "top": "150dp",
                "width": "100%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxTradeLicenseBody.setDefaultUnit(voltmx.flex.DP);
            var flxTradeLicenseHeading = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": false,
                "height": "130dp",
                "id": "flxTradeLicenseHeading",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "CopyslFbox0a9831affa2094b",
                "top": "0dp",
                "width": "88%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxTradeLicenseHeading.setDefaultUnit(voltmx.flex.DP);
            var CopyimgCompany0e556c83388d044 = new voltmx.ui.Image2({
                "height": "40%",
                "id": "CopyimgCompany0e556c83388d044",
                "isVisible": true,
                "left": "0",
                "skin": "CopyslImage0bce6b78d7c284f",
                "src": "companylogo.png",
                "top": "0",
                "width": "60dp"
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var CopyflxEnterYourCompanyName0j0884a9525ea4d = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": false,
                "height": "60%",
                "id": "CopyflxEnterYourCompanyName0j0884a9525ea4d",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "10dp",
                "isModalContainer": false,
                "skin": "CopyslFbox0a9831affa2094b",
                "width": "90%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            CopyflxEnterYourCompanyName0j0884a9525ea4d.setDefaultUnit(voltmx.flex.DP);
            var CopylblEnterYourCompanyName0d4a4f7167e854b = new voltmx.ui.Label({
                "centerY": "50%",
                "height": "100%",
                "id": "CopylblEnterYourCompanyName0d4a4f7167e854b",
                "isVisible": true,
                "left": "0",
                "skin": "sknlblDubaiReg231F20Font84px",
                "text": "Enter your Trade License \nNumber",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "width": "100%"
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            CopyflxEnterYourCompanyName0j0884a9525ea4d.add(CopylblEnterYourCompanyName0d4a4f7167e854b);
            flxTradeLicenseHeading.add(CopyimgCompany0e556c83388d044, CopyflxEnterYourCompanyName0j0884a9525ea4d);
            var flxTradeLicenseTextBox = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "bottom": "45%",
                "centerX": "50%",
                "clipBounds": false,
                "height": "100dp",
                "id": "flxTradeLicenseTextBox",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "CopyslFbox0a9831affa2094b",
                "top": "0dp",
                "width": "88%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxTradeLicenseTextBox.setDefaultUnit(voltmx.flex.DP);
            var tbxTradeLicenseNumber = new voltmx.ui.TextBox2({
                "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
                "focusSkin": "skntbxBGffffffDubaiReg231f20Font50px",
                "height": "55%",
                "id": "tbxTradeLicenseNumber",
                "isVisible": true,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
                "left": "0",
                "placeholder": "Trade License Number",
                "secureTextEntry": false,
                "skin": "skntbxBGffffffDubaiReg231f20Font50px",
                "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
                "top": "0",
                "width": "100%"
            }, {
                "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [3, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "autoFilter": false,
                "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DEFAULT,
                "placeholderSkin": "skntxtplhrCPReg8391a1Font80px",
                "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
            });
            var flxBottomLineTradeLicense = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "centerY": "60%",
                "clipBounds": false,
                "height": "3%",
                "id": "flxBottomLineTradeLicense",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "sknflxBGdcdcdcplainborderdcdcdc1px1px",
                "width": "93%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxBottomLineTradeLicense.setDefaultUnit(voltmx.flex.DP);
            flxBottomLineTradeLicense.add();
            flxTradeLicenseTextBox.add(tbxTradeLicenseNumber, flxBottomLineTradeLicense);
            var flxTradeLicenseError = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "bottom": "70dp",
                "clipBounds": false,
                "height": "30dp",
                "id": "flxTradeLicenseError",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "25dp",
                "isModalContainer": false,
                "skin": "sknFlxBasic",
                "top": -120,
                "width": "40%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxTradeLicenseError.setDefaultUnit(voltmx.flex.DP);
            var lblTradeLicenseError = new voltmx.ui.Label({
                "centerX": "50%",
                "centerY": "50%",
                "height": "70%",
                "id": "lblTradeLicenseError",
                "isVisible": true,
                "left": "0",
                "skin": "sknlblDubaiRegff0000Font40px",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "0",
                "width": "100%"
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxTradeLicenseError.add(lblTradeLicenseError);
            flxTradeLicenseBody.add(flxTradeLicenseHeading, flxTradeLicenseTextBox, flxTradeLicenseError);
            var flxTradeLicenseFooter = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "bottom": "30%",
                "centerX": "50%",
                "clipBounds": false,
                "height": "90dp",
                "id": "flxTradeLicenseFooter",
                "isVisible": false,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "sknFlxBasic",
                "width": "85%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxTradeLicenseFooter.setDefaultUnit(voltmx.flex.DP);
            var imgNextInTradeLicenseNumber = new voltmx.ui.Image2({
                "height": "90%",
                "id": "imgNextInTradeLicenseNumber",
                "isVisible": true,
                "right": "0dp",
                "skin": "CopyslImage0bce6b78d7c284f",
                "src": "group_13213151762.png",
                "top": "0",
                "width": "25%"
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxTradeLicenseFooter.add(imgNextInTradeLicenseNumber);
            flxTradeLicense.add(HeaderRegisterForTradeLicense, flxBarContainerTradeLicense, flxTradeLicenseBody, flxTradeLicenseFooter);
            var flxTradeLicenseExpiryDate = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "centerY": "50%",
                "clipBounds": false,
                "height": "100%",
                "id": "flxTradeLicenseExpiryDate",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "CopyslFbox0a9831affa2094b",
                "top": "0",
                "width": "100%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxTradeLicenseExpiryDate.setDefaultUnit(voltmx.flex.DP);
            var HeaderRegisterForTradeLicenseExpiryDate = new com.hcl.voltmx.alwataneya1.HeaderRegister1({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "height": "100dp",
                "id": "HeaderRegisterForTradeLicenseExpiryDate",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0",
                "masterType": constants.MASTER_TYPE_DEFAULT,
                "isModalContainer": false,
                "skin": "CopyslFbox0a9831affa2094b",
                "top": 0,
                "width": "100%",
                "appName": "AlwataneyaAuction",
                "overrides": {
                    "HeaderRegister1": {
                        "height": "100dp"
                    },
                    "imgAWA": {
                        "src": "logo_1_4.png"
                    },
                    "imgBack": {
                        "isVisible": true,
                        "src": "vector__1_1.png"
                    }
                }
            }, {
                "paddingInPixel": false,
                "overrides": {}
            }, {
                "overrides": {}
            });
            var flxBarContainerTradeLicenseExpiryDate = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": false,
                "height": "5%",
                "id": "flxBarContainerTradeLicenseExpiryDate",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "90dp",
                "width": "85%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxBarContainerTradeLicenseExpiryDate.setDefaultUnit(voltmx.flex.DP);
            var flxTradeLicenseExpiryDateBar = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": false,
                "height": "25%",
                "id": "flxTradeLicenseExpiryDateBar",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "sknflxBGDFDFDFRoundedBorderDFDFDF1px",
                "top": "0",
                "width": "100%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxTradeLicenseExpiryDateBar.setDefaultUnit(voltmx.flex.DP);
            var flxInnerBarTradeLicenseExpiryDate = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "100%",
                "id": "flxInnerBarTradeLicenseExpiryDate",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "sknflxBG0077baRoundedBorder0077ba1px",
                "top": "0",
                "width": "32%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxInnerBarTradeLicenseExpiryDate.setDefaultUnit(voltmx.flex.DP);
            flxInnerBarTradeLicenseExpiryDate.add();
            flxTradeLicenseExpiryDateBar.add(flxInnerBarTradeLicenseExpiryDate);
            flxBarContainerTradeLicenseExpiryDate.add(flxTradeLicenseExpiryDateBar);
            var flxTradeLicenseExpiryDateBody = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": false,
                "height": "300dp",
                "id": "flxTradeLicenseExpiryDateBody",
                "isVisible": true,
                "layoutType": voltmx.flex.FLOW_VERTICAL,
                "left": "10dp",
                "isModalContainer": false,
                "skin": "CopyslFbox0a9831affa2094b",
                "top": "150dp",
                "width": "100%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxTradeLicenseExpiryDateBody.setDefaultUnit(voltmx.flex.DP);
            var flxTradeLicenseExpiryDateHeading = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": false,
                "height": "130dp",
                "id": "flxTradeLicenseExpiryDateHeading",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "CopyslFbox0a9831affa2094b",
                "top": "0dp",
                "width": "88%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxTradeLicenseExpiryDateHeading.setDefaultUnit(voltmx.flex.DP);
            var imgTradeLicenseExpiryDate = new voltmx.ui.Image2({
                "height": "40%",
                "id": "imgTradeLicenseExpiryDate",
                "isVisible": true,
                "left": "0",
                "skin": "CopyslImage0bce6b78d7c284f",
                "src": "calendar2.png",
                "top": "0",
                "width": "60dp"
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var flxEnterYourTradeLicenseExpiryDate = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": false,
                "height": "60%",
                "id": "flxEnterYourTradeLicenseExpiryDate",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "10dp",
                "isModalContainer": false,
                "skin": "CopyslFbox0a9831affa2094b",
                "width": "90%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxEnterYourTradeLicenseExpiryDate.setDefaultUnit(voltmx.flex.DP);
            var lblEnterYourTradeLicenseNumber = new voltmx.ui.Label({
                "centerY": "50%",
                "height": "100%",
                "id": "lblEnterYourTradeLicenseNumber",
                "isVisible": true,
                "left": "0",
                "skin": "sknlblDubaiReg231F20Font84px",
                "text": "Enter your Trade License \nExpiry Date",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "width": "100%"
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxEnterYourTradeLicenseExpiryDate.add(lblEnterYourTradeLicenseNumber);
            flxTradeLicenseExpiryDateHeading.add(imgTradeLicenseExpiryDate, flxEnterYourTradeLicenseExpiryDate);
            var flxTradeLicenseExpiryDateTextBox = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "bottom": "45%",
                "centerX": "50%",
                "clipBounds": false,
                "height": "100dp",
                "id": "flxTradeLicenseExpiryDateTextBox",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "CopyslFbox0a9831affa2094b",
                "top": "0dp",
                "width": "88%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxTradeLicenseExpiryDateTextBox.setDefaultUnit(voltmx.flex.DP);
            var tbxTradeLicenseExpiryDate = new voltmx.ui.TextBox2({
                "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
                "focusSkin": "skntbxBGffffffDubaiReg231f20Font50px",
                "height": "55%",
                "id": "tbxTradeLicenseExpiryDate",
                "isVisible": false,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
                "left": "0",
                "placeholder": "Trade License Expiry Date",
                "secureTextEntry": false,
                "skin": "skntbxBGffffffDubaiReg231f20Font50px",
                "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
                "top": "0",
                "width": "100%"
            }, {
                "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [3, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "autoFilter": false,
                "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DEFAULT,
                "placeholderSkin": "skntxtplhrCPReg8391a1Font80px",
                "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
            });
            var calendarTradeLicenseExpiryDate = new voltmx.ui.Calendar({
                "bottom": "0",
                "calendarIcon": "iconoir_calendar.png",
                "dateComponents": [2, 5, 2025],
                "dateFormat": "dd/MM/yyyy",
                "day": 2,
                "formattedDate": "02/05/2025",
                "height": "50%",
                "hour": 0,
                "id": "calendarTradeLicenseExpiryDate",
                "isVisible": true,
                "left": "0",
                "minutes": 0,
                "month": 5,
                "placeholder": "Trade License Expiry Date",
                "seconds": 0,
                "skin": "CopyslCalendar0b01d3cbc87d140",
                "top": "0",
                "viewType": constants.CALENDAR_VIEW_TYPE_DEFAULT,
                "width": "100%",
                "year": 2025
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var flxBottomLineTradeLicenseExpiryDate = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "centerY": "60%",
                "clipBounds": false,
                "height": "3%",
                "id": "flxBottomLineTradeLicenseExpiryDate",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "sknflxBGdcdcdcplainborderdcdcdc1px1px",
                "width": "93%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxBottomLineTradeLicenseExpiryDate.setDefaultUnit(voltmx.flex.DP);
            flxBottomLineTradeLicenseExpiryDate.add();
            flxTradeLicenseExpiryDateTextBox.add(tbxTradeLicenseExpiryDate, calendarTradeLicenseExpiryDate, flxBottomLineTradeLicenseExpiryDate);
            var flxTradeLicenseExpiryDateError = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "bottom": "70dp",
                "clipBounds": false,
                "height": "30dp",
                "id": "flxTradeLicenseExpiryDateError",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "25dp",
                "isModalContainer": false,
                "skin": "sknFlxBasic",
                "top": -120,
                "width": "40%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxTradeLicenseExpiryDateError.setDefaultUnit(voltmx.flex.DP);
            var lblTradeLicenseExpiryDateError = new voltmx.ui.Label({
                "centerX": "50%",
                "centerY": "50%",
                "height": "70%",
                "id": "lblTradeLicenseExpiryDateError",
                "isVisible": true,
                "left": "0",
                "skin": "sknlblDubaiRegff0000Font40px",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "0",
                "width": "100%"
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxTradeLicenseExpiryDateError.add(lblTradeLicenseExpiryDateError);
            flxTradeLicenseExpiryDateBody.add(flxTradeLicenseExpiryDateHeading, flxTradeLicenseExpiryDateTextBox, flxTradeLicenseExpiryDateError);
            var flxTradeLicenseExpiryDateFooter = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "bottom": "30%",
                "centerX": "50%",
                "clipBounds": false,
                "height": "90dp",
                "id": "flxTradeLicenseExpiryDateFooter",
                "isVisible": false,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "sknFlxBasic",
                "width": "85%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxTradeLicenseExpiryDateFooter.setDefaultUnit(voltmx.flex.DP);
            var imgNextInTradeLicenseExpiryDate = new voltmx.ui.Image2({
                "height": "90%",
                "id": "imgNextInTradeLicenseExpiryDate",
                "isVisible": true,
                "right": "0dp",
                "skin": "CopyslImage0bce6b78d7c284f",
                "src": "group_13213151762.png",
                "top": "0",
                "width": "25%"
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxTradeLicenseExpiryDateFooter.add(imgNextInTradeLicenseExpiryDate);
            flxTradeLicenseExpiryDate.add(HeaderRegisterForTradeLicenseExpiryDate, flxBarContainerTradeLicenseExpiryDate, flxTradeLicenseExpiryDateBody, flxTradeLicenseExpiryDateFooter);
            var flxEmailVerificationCode = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "centerY": "50%",
                "clipBounds": false,
                "height": "100%",
                "id": "flxEmailVerificationCode",
                "isVisible": false,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "CopyslFbox0a9831affa2094b",
                "top": 100,
                "width": "100%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxEmailVerificationCode.setDefaultUnit(voltmx.flex.DP);
            var HeaderRegisterForVerificationCode = new com.hcl.voltmx.alwataneya1.HeaderRegister1({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "height": "10%",
                "id": "HeaderRegisterForVerificationCode",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0",
                "masterType": constants.MASTER_TYPE_DEFAULT,
                "isModalContainer": false,
                "skin": "CopyslFbox0a9831affa2094b",
                "top": 0,
                "width": "100%",
                "appName": "AlwataneyaAuction",
                "overrides": {
                    "imgAWA": {
                        "src": "logo_1_4.png"
                    },
                    "imgBack": {
                        "isVisible": true,
                        "src": "vector__1_1.png"
                    }
                }
            }, {
                "paddingInPixel": false,
                "overrides": {}
            }, {
                "overrides": {}
            });
            var flxVerificationBody = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": false,
                "height": "300dp",
                "id": "flxVerificationBody",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "CopyslFbox0a9831affa2094b",
                "top": "150dp",
                "width": "90%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxVerificationBody.setDefaultUnit(voltmx.flex.DP);
            var head = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "130dp",
                "id": "head",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "CopyslFbox0a9831affa2094b",
                "top": "0",
                "width": "100%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            head.setDefaultUnit(voltmx.flex.DP);
            var imgEmail = new voltmx.ui.Image2({
                "height": "40%",
                "id": "imgEmail",
                "isVisible": true,
                "left": "0",
                "skin": "CopyslImage0bce6b78d7c284f",
                "src": "fontisto_email.png",
                "top": "0",
                "width": "15%"
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var flxCodeVerification = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": false,
                "height": "70%",
                "id": "flxCodeVerification",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "CopyslFbox0a9831affa2094b",
                "width": "100%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxCodeVerification.setDefaultUnit(voltmx.flex.DP);
            var lblEnterCodeSentToYou = new voltmx.ui.Label({
                "centerY": "50%",
                "height": "90%",
                "id": "lblEnterCodeSentToYou",
                "isVisible": true,
                "left": "0dp",
                "skin": "sknlblDubaiReg231F20Font84px",
                "text": "Enter the  code sent to your email address",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "width": "90%"
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxCodeVerification.add(lblEnterCodeSentToYou);
            head.add(imgEmail, flxCodeVerification);
            var Codebody = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "120dp",
                "id": "Codebody",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "CopyslFbox0a9831affa2094b",
                "top": "130dp",
                "width": "100%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            Codebody.setDefaultUnit(voltmx.flex.DP);
            var flxCode = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "75%",
                "id": "flxCode",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "CopyslFbox0a9831affa2094b",
                "top": "0",
                "width": "100%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxCode.setDefaultUnit(voltmx.flex.DP);
            var flxCode1 = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": false,
                "height": "90%",
                "id": "flxCode1",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "CopyslFbox0a9831affa2094b",
                "top": "0",
                "width": "15%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxCode1.setDefaultUnit(voltmx.flex.DP);
            var tbxCode1 = new voltmx.ui.TextBox2({
                "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
                "focusSkin": "CopydefTextBoxFocus2",
                "height": "80%",
                "id": "tbxCode1",
                "isVisible": true,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
                "left": "0",
                "secureTextEntry": false,
                "skin": "skntbx333333DubaiRegFont84px",
                "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
                "top": 10,
                "width": "100%"
            }, {
                "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [3, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "autoFilter": false,
                "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DEFAULT,
                "placeholderSkin": "CopydefTextBoxPlaceholder",
                "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
            });
            var flxCodeBottomLine1 = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "bottom": "5dp",
                "centerX": "50%",
                "clipBounds": false,
                "height": "2%",
                "id": "flxCodeBottomLine1",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "sknflxDCDCDCBorder1px",
                "width": "95%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxCodeBottomLine1.setDefaultUnit(voltmx.flex.DP);
            flxCodeBottomLine1.add();
            flxCode1.add(tbxCode1, flxCodeBottomLine1);
            var flxCode2 = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": false,
                "height": "90%",
                "id": "flxCode2",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "90dp",
                "isModalContainer": false,
                "skin": "CopyslFbox0a9831affa2094b",
                "top": 0,
                "width": "15%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxCode2.setDefaultUnit(voltmx.flex.DP);
            var tbxCode2 = new voltmx.ui.TextBox2({
                "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
                "focusSkin": "CopydefTextBoxFocus2",
                "height": "80%",
                "id": "tbxCode2",
                "isVisible": true,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
                "left": "0",
                "secureTextEntry": false,
                "skin": "skntbx333333DubaiRegFont84px",
                "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
                "top": "10dp",
                "width": "100%"
            }, {
                "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [3, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "autoFilter": false,
                "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DEFAULT,
                "placeholderSkin": "CopydefTextBoxPlaceholder",
                "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
            });
            var flxCodeBottomLine2 = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "bottom": 5,
                "centerX": "50%",
                "clipBounds": false,
                "height": "2%",
                "id": "flxCodeBottomLine2",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "sknflxDCDCDCBorder1px",
                "width": "95%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxCodeBottomLine2.setDefaultUnit(voltmx.flex.DP);
            flxCodeBottomLine2.add();
            flxCode2.add(tbxCode2, flxCodeBottomLine2);
            var flxCode3 = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": false,
                "height": "90%",
                "id": "flxCode3",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "175dp",
                "isModalContainer": false,
                "skin": "CopyslFbox0a9831affa2094b",
                "top": "0",
                "width": "15%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxCode3.setDefaultUnit(voltmx.flex.DP);
            var tbxCode3 = new voltmx.ui.TextBox2({
                "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
                "focusSkin": "CopydefTextBoxFocus2",
                "height": "80%",
                "id": "tbxCode3",
                "isVisible": true,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
                "left": "0",
                "secureTextEntry": false,
                "skin": "skntbx333333DubaiRegFont84px",
                "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
                "top": "10dp",
                "width": "100%"
            }, {
                "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [3, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "autoFilter": false,
                "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DEFAULT,
                "placeholderSkin": "CopydefTextBoxPlaceholder",
                "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
            });
            var flxCodeBottomLine3 = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "bottom": "5dp",
                "clipBounds": false,
                "height": "2%",
                "id": "flxCodeBottomLine3",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "sknflxDCDCDCBorder1px",
                "width": "100%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxCodeBottomLine3.setDefaultUnit(voltmx.flex.DP);
            flxCodeBottomLine3.add();
            flxCode3.add(tbxCode3, flxCodeBottomLine3);
            var flxCode4 = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": false,
                "height": "90%",
                "id": "flxCode4",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "260dp",
                "isModalContainer": false,
                "skin": "CopyslFbox0a9831affa2094b",
                "top": "0",
                "width": "15%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxCode4.setDefaultUnit(voltmx.flex.DP);
            var tbxCode4 = new voltmx.ui.TextBox2({
                "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
                "focusSkin": "CopydefTextBoxFocus2",
                "height": "80%",
                "id": "tbxCode4",
                "isVisible": true,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
                "left": "0",
                "secureTextEntry": false,
                "skin": "skntbx333333DubaiRegFont84px",
                "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
                "top": "10dp",
                "width": "100%"
            }, {
                "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [3, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "autoFilter": false,
                "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DEFAULT,
                "placeholderSkin": "CopydefTextBoxPlaceholder",
                "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
            });
            var flxCodeBottomLine4 = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "bottom": "5dp",
                "clipBounds": false,
                "height": "2%",
                "id": "flxCodeBottomLine4",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "sknflxDCDCDCBorder1px",
                "width": "100%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxCodeBottomLine4.setDefaultUnit(voltmx.flex.DP);
            flxCodeBottomLine4.add();
            flxCode4.add(tbxCode4, flxCodeBottomLine4);
            var flxCode5 = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": false,
                "height": "90%",
                "id": "flxCode5",
                "isVisible": false,
                "layoutType": voltmx.flex.FREE_FORM,
                "isModalContainer": false,
                "right": "52dp",
                "skin": "CopyslFbox0a9831affa2094b",
                "top": "0",
                "width": "14%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxCode5.setDefaultUnit(voltmx.flex.DP);
            var tbxCode5 = new voltmx.ui.TextBox2({
                "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
                "focusSkin": "CopydefTextBoxFocus2",
                "height": "80%",
                "id": "tbxCode5",
                "isVisible": true,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
                "left": "0",
                "secureTextEntry": false,
                "skin": "skntbx333333DubaiRegFont84px",
                "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
                "top": "10dp",
                "width": "100%"
            }, {
                "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [3, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "autoFilter": false,
                "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DEFAULT,
                "placeholderSkin": "CopydefTextBoxPlaceholder",
                "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
            });
            var flxCodeBottomLine5 = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "bottom": "5dp",
                "clipBounds": false,
                "height": "2dp",
                "id": "flxCodeBottomLine5",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "sknflxDCDCDCBorder1px",
                "width": "100%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxCodeBottomLine5.setDefaultUnit(voltmx.flex.DP);
            flxCodeBottomLine5.add();
            flxCode5.add(tbxCode5, flxCodeBottomLine5);
            var flxCode6 = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": false,
                "height": "90%",
                "id": "flxCode6",
                "isVisible": false,
                "layoutType": voltmx.flex.FREE_FORM,
                "isModalContainer": false,
                "right": 0,
                "skin": "CopyslFbox0a9831affa2094b",
                "top": "0",
                "width": "15%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxCode6.setDefaultUnit(voltmx.flex.DP);
            var tbxCode6 = new voltmx.ui.TextBox2({
                "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
                "focusSkin": "CopydefTextBoxFocus2",
                "height": "80%",
                "id": "tbxCode6",
                "isVisible": true,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
                "left": "0",
                "secureTextEntry": false,
                "skin": "skntbx333333DubaiRegFont84px",
                "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
                "top": "10dp",
                "width": "100%"
            }, {
                "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [3, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "autoFilter": false,
                "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DEFAULT,
                "placeholderSkin": "CopydefTextBoxPlaceholder",
                "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
            });
            var flxCodeBottomLine6 = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "bottom": "5dp",
                "clipBounds": false,
                "height": "2%",
                "id": "flxCodeBottomLine6",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "sknflxDCDCDCBorder1px",
                "width": "100%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxCodeBottomLine6.setDefaultUnit(voltmx.flex.DP);
            flxCodeBottomLine6.add();
            flxCode6.add(tbxCode6, flxCodeBottomLine6);
            flxCode.add(flxCode1, flxCode2, flxCode3, flxCode4, flxCode5, flxCode6);
            var flxResendCode = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "bottom": 0,
                "clipBounds": false,
                "height": "25%",
                "id": "flxResendCode",
                "isVisible": true,
                "layoutType": voltmx.flex.FLOW_HORIZONTAL,
                "left": "0",
                "isModalContainer": false,
                "skin": "CopyslFbox0a9831affa2094b",
                "width": "60%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxResendCode.setDefaultUnit(voltmx.flex.DP);
            var lblEmailResendCodein = new voltmx.ui.Label({
                "centerY": "50%",
                "height": "100%",
                "id": "lblEmailResendCodein",
                "isVisible": true,
                "left": "0dp",
                "skin": "sknlbl7e7e7eDubaiLtFont55px",
                "text": "Resend Code in",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "width": "60%"
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblEmailTimer = new voltmx.ui.Label({
                "centerY": "50%",
                "id": "lblEmailTimer",
                "isVisible": true,
                "left": "8dp",
                "skin": "sknlbl7e7e7eDubaiLtFont55px",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "width": voltmx.flex.USE_PREFERRED_SIZE
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxResendCode.add(lblEmailResendCodein, lblEmailTimer);
            var flxEmailOtpVerified = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "bottom": "0",
                "clipBounds": false,
                "height": "25%",
                "id": "flxEmailOtpVerified",
                "isVisible": false,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "slFbox",
                "width": "60%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxEmailOtpVerified.setDefaultUnit(voltmx.flex.DP);
            var lblEmailOtpVerified = new voltmx.ui.Label({
                "centerY": "50%",
                "height": "90%",
                "id": "lblEmailOtpVerified",
                "isVisible": true,
                "left": "0",
                "skin": "sknlblDubaiReg003b0cFont50px",
                "text": "OTP Verified!!!",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "width": "60%"
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxEmailOtpVerified.add(lblEmailOtpVerified);
            var flxEmailOtpError = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": false,
                "height": "25%",
                "id": "flxEmailOtpError",
                "isVisible": false,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "slFbox",
                "width": "60%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxEmailOtpError.setDefaultUnit(voltmx.flex.DP);
            var lblEmailOtpError = new voltmx.ui.Label({
                "centerY": "50%",
                "height": "90%",
                "id": "lblEmailOtpError",
                "isVisible": true,
                "left": "0",
                "right": "0",
                "skin": "sknlblDubaiRegff0000Font40px",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "width": "90%"
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxEmailOtpError.add(lblEmailOtpError);
            Codebody.add(flxCode, flxResendCode, flxEmailOtpVerified, flxEmailOtpError);
            flxVerificationBody.add(head, Codebody);
            var flxEmailVerificationFooter = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "centerX": "50.00%",
                "clipBounds": false,
                "height": "100dp",
                "id": "flxEmailVerificationFooter",
                "isVisible": false,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "CopyslFbox0a9831affa2094b",
                "top": "413dp",
                "width": "95%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxEmailVerificationFooter.setDefaultUnit(voltmx.flex.DP);
            var imgNextInEmailVerification = new voltmx.ui.Image2({
                "centerY": "50%",
                "height": "90%",
                "id": "imgNextInEmailVerification",
                "isVisible": true,
                "right": "0dp",
                "skin": "CopyslImage0bce6b78d7c284f",
                "src": "group_13213151762.png",
                "top": "0",
                "width": "25%"
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxEmailVerificationFooter.add(imgNextInEmailVerification);
            var flxEmailVerificationBarContainer = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": false,
                "height": "5%",
                "id": "flxEmailVerificationBarContainer",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "90dp",
                "width": "85%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxEmailVerificationBarContainer.setDefaultUnit(voltmx.flex.DP);
            var flxEmailVerificationCodeBar = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": false,
                "height": "25%",
                "id": "flxEmailVerificationCodeBar",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "top": "0",
                "width": "100%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxEmailVerificationCodeBar.setDefaultUnit(voltmx.flex.DP);
            var flxInnerBarEmailVerificationCode = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "100%",
                "id": "flxInnerBarEmailVerificationCode",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "sknflxBG0077baRoundedBorder0077ba1px",
                "top": "0",
                "width": "32%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxInnerBarEmailVerificationCode.setDefaultUnit(voltmx.flex.DP);
            flxInnerBarEmailVerificationCode.add();
            flxEmailVerificationCodeBar.add(flxInnerBarEmailVerificationCode);
            flxEmailVerificationBarContainer.add(flxEmailVerificationCodeBar);
            flxEmailVerificationCode.add(HeaderRegisterForVerificationCode, flxVerificationBody, flxEmailVerificationFooter, flxEmailVerificationBarContainer);
            var flxMobileContainer = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "centerY": "50%",
                "clipBounds": false,
                "height": "100%",
                "id": "flxMobileContainer",
                "isVisible": false,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "10dp",
                "isModalContainer": false,
                "skin": "CopyslFbox0a9831affa2094b",
                "top": "10dp",
                "width": "100%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxMobileContainer.setDefaultUnit(voltmx.flex.DP);
            var HeaderRegisterMobileContainer = new com.hcl.voltmx.alwataneya1.HeaderRegister1({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "height": "10%",
                "id": "HeaderRegisterMobileContainer",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0",
                "masterType": constants.MASTER_TYPE_DEFAULT,
                "isModalContainer": false,
                "skin": "CopyslFbox0a9831affa2094b",
                "top": 0,
                "width": "100%",
                "appName": "AlwataneyaAuction",
                "overrides": {
                    "imgAWA": {
                        "src": "logo_1_4.png"
                    },
                    "imgBack": {
                        "isVisible": true,
                        "src": "vector__1_1.png"
                    }
                }
            }, {
                "paddingInPixel": false,
                "overrides": {}
            }, {
                "overrides": {}
            });
            var flxMobileBody = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": false,
                "height": "300dp",
                "id": "flxMobileBody",
                "isVisible": true,
                "layoutType": voltmx.flex.FLOW_VERTICAL,
                "left": "10dp",
                "isModalContainer": false,
                "skin": "CopyslFbox0a9831affa2094b",
                "top": "125dp",
                "width": "100%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxMobileBody.setDefaultUnit(voltmx.flex.DP);
            var flxMobileHead = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": false,
                "height": "200dp",
                "id": "flxMobileHead",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "CopyslFbox0a9831affa2094b",
                "top": "0dp",
                "width": "90%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxMobileHead.setDefaultUnit(voltmx.flex.DP);
            var imgMobile = new voltmx.ui.Image2({
                "height": "50%",
                "id": "imgMobile",
                "isVisible": true,
                "left": "0",
                "skin": "CopyslImage0bce6b78d7c284f",
                "src": "fluent_call_16_regular.png",
                "top": "0",
                "width": "60dp"
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var flxSigningWithWithEmail = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "bottom": "20dp",
                "centerX": "50%",
                "clipBounds": false,
                "height": "50%",
                "id": "flxSigningWithWithEmail",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "CopyslFbox0a9831affa2094b",
                "width": "90%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxSigningWithWithEmail.setDefaultUnit(voltmx.flex.DP);
            var lblImSigningUpWithMobl = new voltmx.ui.Label({
                "height": "50%",
                "id": "lblImSigningUpWithMobl",
                "isVisible": true,
                "left": "0",
                "skin": "sknlblDubaiReg231F20Font84px",
                "text": "I'm signing up with",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": 0,
                "width": "90%"
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblSignedEmail = new voltmx.ui.Label({
                "bottom": 0,
                "height": "50%",
                "id": "lblSignedEmail",
                "isVisible": true,
                "left": "0",
                "skin": "sknlblDubaiReg0077BAFont80px",
                "text": "johnsmith@gmail.com",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "width": voltmx.flex.USE_PREFERRED_SIZE
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxSigningWithWithEmail.add(lblImSigningUpWithMobl, lblSignedEmail);
            flxMobileHead.add(imgMobile, flxSigningWithWithEmail);
            var flxMobileTextBox = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "bottom": "45%",
                "centerX": "50%",
                "clipBounds": false,
                "height": "100dp",
                "id": "flxMobileTextBox",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "CopyslFbox0a9831affa2094b",
                "top": "0dp",
                "width": "88%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxMobileTextBox.setDefaultUnit(voltmx.flex.DP);
            var flxCountryCode = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "55%",
                "id": "flxCountryCode",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "CopyslFbox0a9831affa2094b",
                "top": "0",
                "width": "20%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxCountryCode.setDefaultUnit(voltmx.flex.DP);
            var lblCountryCode = new voltmx.ui.Label({
                "centerX": "50%",
                "centerY": "50%",
                "height": "90%",
                "id": "lblCountryCode",
                "isVisible": true,
                "left": "0",
                "skin": "sknlblCPReg565454Font75px",
                "text": "+971",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "width": "90%"
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxCountryCode.add(lblCountryCode);
            var tbxPhoneNumber = new voltmx.ui.TextBox2({
                "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
                "focusSkin": "skntbxCPReg7e7e7eFont74px",
                "height": "55%",
                "id": "tbxPhoneNumber",
                "isVisible": true,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
                "placeholder": "Your Mobile",
                "right": 35,
                "secureTextEntry": false,
                "skin": "skntbxCPReg7e7e7eFont74px",
                "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
                "top": "0",
                "width": "70%"
            }, {
                "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [3, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "autoFilter": false,
                "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DEFAULT,
                "placeholderSkin": "skntxtplhrCPReg8391a1Font80px",
                "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
            });
            var flxBottomLineMobile = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "centerY": "60%",
                "clipBounds": false,
                "height": "3%",
                "id": "flxBottomLineMobile",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "sknflxBGdcdcdcplainborderdcdcdc1px1px",
                "width": "93%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxBottomLineMobile.setDefaultUnit(voltmx.flex.DP);
            flxBottomLineMobile.add();
            var flxMobileConfirmationMsg = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "bottom": "10dp",
                "centerX": "50%",
                "clipBounds": false,
                "height": "25dp",
                "id": "flxMobileConfirmationMsg",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "CopyslFbox0a9831affa2094b",
                "width": "95%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxMobileConfirmationMsg.setDefaultUnit(voltmx.flex.DP);
            var lblMobileConfo = new voltmx.ui.Label({
                "centerY": "50%",
                "height": "90%",
                "id": "lblMobileConfo",
                "isVisible": true,
                "left": "0",
                "skin": "sknlblDubaiLtFont7e7e7e45px",
                "text": "This should be your business mobile number",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "width": "100%"
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxMobileConfirmationMsg.add(lblMobileConfo);
            var flxMobileError = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": false,
                "height": "30dp",
                "id": "flxMobileError",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "CopyslFbox0a9831affa2094b",
                "top": "100dp",
                "width": "90%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxMobileError.setDefaultUnit(voltmx.flex.DP);
            var lblMobileError = new voltmx.ui.Label({
                "centerY": "50%",
                "height": "70%",
                "id": "lblMobileError",
                "isVisible": true,
                "left": "0dp",
                "skin": "sknlblDubaiRegff0000Font40px",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "0",
                "width": "100%"
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxMobileError.add(lblMobileError);
            flxMobileTextBox.add(flxCountryCode, tbxPhoneNumber, flxBottomLineMobile, flxMobileConfirmationMsg, flxMobileError);
            flxMobileBody.add(flxMobileHead, flxMobileTextBox);
            var flxMobileFooter = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "bottom": "100dp",
                "centerX": "50%",
                "clipBounds": false,
                "height": "90dp",
                "id": "flxMobileFooter",
                "isVisible": false,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "CopyslFbox0a9831affa2094b",
                "width": "90%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxMobileFooter.setDefaultUnit(voltmx.flex.DP);
            var imgNextInMobileVerification = new voltmx.ui.Image2({
                "height": "90%",
                "id": "imgNextInMobileVerification",
                "isVisible": true,
                "right": "0dp",
                "skin": "CopyslImage0bce6b78d7c284f",
                "src": "group_13213151762.png",
                "top": "0",
                "width": "25%"
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxMobileFooter.add(imgNextInMobileVerification);
            var flxBarContainerMobile = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": false,
                "height": "5%",
                "id": "flxBarContainerMobile",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "90dp",
                "width": "85%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxBarContainerMobile.setDefaultUnit(voltmx.flex.DP);
            var flxBarMobile = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": false,
                "height": "25%",
                "id": "flxBarMobile",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "top": "0",
                "width": "100%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxBarMobile.setDefaultUnit(voltmx.flex.DP);
            var flxInnerBarMobile = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "100%",
                "id": "flxInnerBarMobile",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "sknflxBG0077baRoundedBorder0077ba1px",
                "top": "0",
                "width": "46%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxInnerBarMobile.setDefaultUnit(voltmx.flex.DP);
            flxInnerBarMobile.add();
            flxBarMobile.add(flxInnerBarMobile);
            flxBarContainerMobile.add(flxBarMobile);
            flxMobileContainer.add(HeaderRegisterMobileContainer, flxMobileBody, flxMobileFooter, flxBarContainerMobile);
            var flxMobileVerifyAndOTPCode = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "centerY": "50%",
                "clipBounds": false,
                "height": "100%",
                "id": "flxMobileVerifyAndOTPCode",
                "isVisible": false,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "CopyslFbox0a9831affa2094b",
                "top": 110,
                "width": "100%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxMobileVerifyAndOTPCode.setDefaultUnit(voltmx.flex.DP);
            var HeaderRegisterMobileOTP = new com.hcl.voltmx.alwataneya1.HeaderRegister1({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "height": "10%",
                "id": "HeaderRegisterMobileOTP",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0",
                "masterType": constants.MASTER_TYPE_DEFAULT,
                "isModalContainer": false,
                "skin": "CopyslFbox0a9831affa2094b",
                "top": 0,
                "width": "100%",
                "appName": "AlwataneyaAuction",
                "overrides": {
                    "imgAWA": {
                        "src": "logo_1_4.png"
                    },
                    "imgBack": {
                        "isVisible": true,
                        "src": "vector__1_1.png"
                    }
                }
            }, {
                "paddingInPixel": false,
                "overrides": {}
            }, {
                "overrides": {}
            });
            var flxOTPCodeBody = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "centerY": "45%",
                "clipBounds": false,
                "height": "300dp",
                "id": "flxOTPCodeBody",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "CopyslFbox0a9831affa2094b",
                "top": "40dp",
                "width": "85%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxOTPCodeBody.setDefaultUnit(voltmx.flex.DP);
            var flxOTPHead = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "140dp",
                "id": "flxOTPHead",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "CopyslFbox0a9831affa2094b",
                "top": "0",
                "width": "100%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxOTPHead.setDefaultUnit(voltmx.flex.DP);
            var imgPhoneInOtp = new voltmx.ui.Image2({
                "height": "40%",
                "id": "imgPhoneInOtp",
                "isVisible": true,
                "left": "0",
                "skin": "CopyslImage0bce6b78d7c284f",
                "src": "fluent_call_16_regular.png",
                "top": "0",
                "width": "15%"
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var flxCodeVerificationText = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": false,
                "height": "70%",
                "id": "flxCodeVerificationText",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "CopyslFbox0a9831affa2094b",
                "width": "100%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxCodeVerificationText.setDefaultUnit(voltmx.flex.DP);
            var lblEnterOTPSentToYou = new voltmx.ui.Label({
                "centerY": "50%",
                "height": "80%",
                "id": "lblEnterOTPSentToYou",
                "isVisible": true,
                "left": "0dp",
                "skin": "CopydefLabel0a6e93bf773ae44",
                "text": "Enter the  code sent to your Phone Number",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "width": "90%"
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxCodeVerificationText.add(lblEnterOTPSentToYou);
            flxOTPHead.add(imgPhoneInOtp, flxCodeVerificationText);
            var flxOTPBody = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "bottom": "60dp",
                "clipBounds": false,
                "height": "100dp",
                "id": "flxOTPBody",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "CopyslFbox0a9831affa2094b",
                "width": "100%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxOTPBody.setDefaultUnit(voltmx.flex.DP);
            var flxOTPContainer = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "75%",
                "id": "flxOTPContainer",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "sknFlxBasic",
                "top": "0",
                "width": "100%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxOTPContainer.setDefaultUnit(voltmx.flex.DP);
            var flxOTP1 = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": false,
                "height": "90%",
                "id": "flxOTP1",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "CopyslFbox0a9831affa2094b",
                "top": "0",
                "width": "15%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxOTP1.setDefaultUnit(voltmx.flex.DP);
            var tbxOTP1 = new voltmx.ui.TextBox2({
                "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
                "focusSkin": "CopydefTextBoxFocus2",
                "height": "80%",
                "id": "tbxOTP1",
                "isVisible": true,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
                "left": "0",
                "maxTextLength": 1,
                "secureTextEntry": false,
                "skin": "skntbx333333DubaiRegFont84px",
                "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
                "top": 10,
                "width": "100%"
            }, {
                "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [3, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "autoFilter": false,
                "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DEFAULT,
                "placeholderSkin": "CopydefTextBoxPlaceholder",
                "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
            });
            var flxOTPBottomLinE1 = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "bottom": "5dp",
                "centerX": "50%",
                "clipBounds": false,
                "height": "2%",
                "id": "flxOTPBottomLinE1",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "sknflxDCDCDCBorder1px",
                "width": "95%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxOTPBottomLinE1.setDefaultUnit(voltmx.flex.DP);
            flxOTPBottomLinE1.add();
            flxOTP1.add(tbxOTP1, flxOTPBottomLinE1);
            var flxOTP2 = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": false,
                "height": "90%",
                "id": "flxOTP2",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "80dp",
                "isModalContainer": false,
                "skin": "CopyslFbox0a9831affa2094b",
                "top": 0,
                "width": "15%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxOTP2.setDefaultUnit(voltmx.flex.DP);
            var tbxOTP2 = new voltmx.ui.TextBox2({
                "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
                "focusSkin": "CopydefTextBoxFocus2",
                "height": "80%",
                "id": "tbxOTP2",
                "isVisible": true,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
                "left": "0",
                "secureTextEntry": false,
                "skin": "skntbx333333DubaiRegFont84px",
                "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
                "top": "10dp",
                "width": "100%"
            }, {
                "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [3, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "autoFilter": false,
                "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DEFAULT,
                "placeholderSkin": "CopydefTextBoxPlaceholder",
                "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
            });
            var flxotpBottomLine2 = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "bottom": 5,
                "centerX": "50%",
                "clipBounds": false,
                "height": "2%",
                "id": "flxotpBottomLine2",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "sknflxDCDCDCBorder1px",
                "width": "95%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxotpBottomLine2.setDefaultUnit(voltmx.flex.DP);
            flxotpBottomLine2.add();
            flxOTP2.add(tbxOTP2, flxotpBottomLine2);
            var flxOTP3 = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": false,
                "height": "90%",
                "id": "flxOTP3",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "170dp",
                "isModalContainer": false,
                "skin": "CopyslFbox0a9831affa2094b",
                "top": "0",
                "width": "15%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxOTP3.setDefaultUnit(voltmx.flex.DP);
            var tbxotp3 = new voltmx.ui.TextBox2({
                "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
                "focusSkin": "CopydefTextBoxFocus2",
                "height": "80%",
                "id": "tbxotp3",
                "isVisible": true,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
                "left": "0",
                "secureTextEntry": false,
                "skin": "skntbx333333DubaiRegFont84px",
                "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
                "top": "10dp",
                "width": "100%"
            }, {
                "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [3, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "autoFilter": false,
                "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DEFAULT,
                "placeholderSkin": "CopydefTextBoxPlaceholder",
                "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
            });
            var flxOTPBottomLine3 = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "bottom": "5dp",
                "clipBounds": false,
                "height": "2%",
                "id": "flxOTPBottomLine3",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "sknflxDCDCDCBorder1px",
                "width": "100%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxOTPBottomLine3.setDefaultUnit(voltmx.flex.DP);
            flxOTPBottomLine3.add();
            flxOTP3.add(tbxotp3, flxOTPBottomLine3);
            var flxOTP4 = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": false,
                "height": "90%",
                "id": "flxOTP4",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "250dp",
                "isModalContainer": false,
                "skin": "CopyslFbox0a9831affa2094b",
                "top": "0",
                "width": "15%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxOTP4.setDefaultUnit(voltmx.flex.DP);
            var tbxOTP4 = new voltmx.ui.TextBox2({
                "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
                "focusSkin": "CopydefTextBoxFocus2",
                "height": "80%",
                "id": "tbxOTP4",
                "isVisible": true,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
                "left": "0",
                "secureTextEntry": false,
                "skin": "skntbx333333DubaiRegFont84px",
                "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
                "top": "10dp",
                "width": "100%"
            }, {
                "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [3, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "autoFilter": false,
                "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DEFAULT,
                "placeholderSkin": "CopydefTextBoxPlaceholder",
                "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
            });
            var flxOTPBottomLine4 = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "bottom": "5dp",
                "clipBounds": false,
                "height": "2%",
                "id": "flxOTPBottomLine4",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "sknflxDCDCDCBorder1px",
                "width": "100%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxOTPBottomLine4.setDefaultUnit(voltmx.flex.DP);
            flxOTPBottomLine4.add();
            flxOTP4.add(tbxOTP4, flxOTPBottomLine4);
            var flxOTP5 = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": false,
                "height": "90%",
                "id": "flxOTP5",
                "isVisible": false,
                "layoutType": voltmx.flex.FREE_FORM,
                "isModalContainer": false,
                "right": "52dp",
                "skin": "CopyslFbox0a9831affa2094b",
                "top": "0",
                "width": "14%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxOTP5.setDefaultUnit(voltmx.flex.DP);
            var tbxOTP5 = new voltmx.ui.TextBox2({
                "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
                "focusSkin": "CopydefTextBoxFocus2",
                "height": "80%",
                "id": "tbxOTP5",
                "isVisible": true,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
                "left": "0",
                "secureTextEntry": false,
                "skin": "skntbx333333DubaiRegFont84px",
                "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
                "top": "10dp",
                "width": "100%"
            }, {
                "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [3, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "autoFilter": false,
                "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DEFAULT,
                "placeholderSkin": "CopydefTextBoxPlaceholder",
                "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
            });
            var flxOTPBottomLine5 = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "bottom": "5dp",
                "clipBounds": false,
                "height": "2dp",
                "id": "flxOTPBottomLine5",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "sknflxDCDCDCBorder1px",
                "width": "100%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxOTPBottomLine5.setDefaultUnit(voltmx.flex.DP);
            flxOTPBottomLine5.add();
            flxOTP5.add(tbxOTP5, flxOTPBottomLine5);
            var flxOTP6 = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": false,
                "height": "90%",
                "id": "flxOTP6",
                "isVisible": false,
                "layoutType": voltmx.flex.FREE_FORM,
                "isModalContainer": false,
                "right": 0,
                "skin": "CopyslFbox0a9831affa2094b",
                "top": "0",
                "width": "15%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxOTP6.setDefaultUnit(voltmx.flex.DP);
            var tbxOTP6 = new voltmx.ui.TextBox2({
                "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
                "focusSkin": "CopydefTextBoxFocus2",
                "height": "80%",
                "id": "tbxOTP6",
                "isVisible": true,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
                "left": "0",
                "secureTextEntry": false,
                "skin": "skntbx333333DubaiRegFont84px",
                "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
                "top": "10dp",
                "width": "100%"
            }, {
                "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [3, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "autoFilter": false,
                "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DEFAULT,
                "placeholderSkin": "CopydefTextBoxPlaceholder",
                "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
            });
            var flxOTPbottomLine6 = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "bottom": "5dp",
                "clipBounds": false,
                "height": "2%",
                "id": "flxOTPbottomLine6",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "sknflxDCDCDCBorder1px",
                "width": "100%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxOTPbottomLine6.setDefaultUnit(voltmx.flex.DP);
            flxOTPbottomLine6.add();
            flxOTP6.add(tbxOTP6, flxOTPbottomLine6);
            flxOTPContainer.add(flxOTP1, flxOTP2, flxOTP3, flxOTP4, flxOTP5, flxOTP6);
            var flxResendOTPCode = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "bottom": 0,
                "clipBounds": false,
                "height": "25%",
                "id": "flxResendOTPCode",
                "isVisible": true,
                "layoutType": voltmx.flex.FLOW_HORIZONTAL,
                "left": "0",
                "isModalContainer": false,
                "skin": "CopyslFbox0a9831affa2094b",
                "width": "100%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxResendOTPCode.setDefaultUnit(voltmx.flex.DP);
            var lblResendMblOTPCode = new voltmx.ui.Label({
                "centerY": "50%",
                "id": "lblResendMblOTPCode",
                "isVisible": true,
                "left": "0dp",
                "skin": "sknlbl7e7e7eDubaiLtFont55px",
                "text": "Resend Code in",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "width": voltmx.flex.USE_PREFERRED_SIZE
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblMobileTimer = new voltmx.ui.Label({
                "centerY": "50%",
                "id": "lblMobileTimer",
                "isVisible": true,
                "left": "8dp",
                "skin": "sknlbl7e7e7eDubaiLtFont55px",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "width": voltmx.flex.USE_PREFERRED_SIZE
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxResendOTPCode.add(lblResendMblOTPCode, lblMobileTimer);
            var flxMobileOtpVerified = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "bottom": 0,
                "clipBounds": false,
                "height": "25%",
                "id": "flxMobileOtpVerified",
                "isVisible": false,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "slFbox",
                "width": "100%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxMobileOtpVerified.setDefaultUnit(voltmx.flex.DP);
            var lblMobileOtpVerified = new voltmx.ui.Label({
                "id": "lblMobileOtpVerified",
                "isVisible": true,
                "left": "0",
                "skin": "sknlblDubaiReg003b0cFont50px",
                "text": "Otp Verified!!!",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "0",
                "width": voltmx.flex.USE_PREFERRED_SIZE
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxMobileOtpVerified.add(lblMobileOtpVerified);
            flxOTPBody.add(flxOTPContainer, flxResendOTPCode, flxMobileOtpVerified);
            flxOTPCodeBody.add(flxOTPHead, flxOTPBody);
            var flxOtpVerificationFooter = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "bottom": "10%",
                "centerX": "50%",
                "clipBounds": false,
                "height": "15%",
                "id": "flxOtpVerificationFooter",
                "isVisible": false,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "CopyslFbox0a9831affa2094b",
                "width": "95%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxOtpVerificationFooter.setDefaultUnit(voltmx.flex.DP);
            var imgNextInOTPVerification = new voltmx.ui.Image2({
                "centerY": "50%",
                "height": "90%",
                "id": "imgNextInOTPVerification",
                "isVisible": true,
                "right": "0dp",
                "skin": "CopyslImage0bce6b78d7c284f",
                "src": "group_13213151762.png",
                "top": "0",
                "width": "25%"
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxOtpVerificationFooter.add(imgNextInOTPVerification);
            var flxBarContainerMobileOtp = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": false,
                "height": "5%",
                "id": "flxBarContainerMobileOtp",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "90dp",
                "width": "85%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxBarContainerMobileOtp.setDefaultUnit(voltmx.flex.DP);
            var flxBarMobileOtp = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": false,
                "height": "25%",
                "id": "flxBarMobileOtp",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "top": "0",
                "width": "100%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxBarMobileOtp.setDefaultUnit(voltmx.flex.DP);
            var flxInnerBarMobileOtp = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "100%",
                "id": "flxInnerBarMobileOtp",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "sknflxBG0077baRoundedBorder0077ba1px",
                "top": "0",
                "width": "54%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxInnerBarMobileOtp.setDefaultUnit(voltmx.flex.DP);
            flxInnerBarMobileOtp.add();
            flxBarMobileOtp.add(flxInnerBarMobileOtp);
            flxBarContainerMobileOtp.add(flxBarMobileOtp);
            flxMobileVerifyAndOTPCode.add(HeaderRegisterMobileOTP, flxOTPCodeBody, flxOtpVerificationFooter, flxBarContainerMobileOtp);
            var flxPopupHowWouldYouUploadYourDoc = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "bottom": "-20dp",
                "centerX": "50%",
                "centerY": "50%",
                "clipBounds": false,
                "height": "100%",
                "id": "flxPopupHowWouldYouUploadYourDoc",
                "isVisible": false,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "10dp",
                "isModalContainer": false,
                "skin": "CopyCopyslFbox0f82f07b8ff654d",
                "top": "10dp",
                "width": "100%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxPopupHowWouldYouUploadYourDoc.setDefaultUnit(voltmx.flex.DP);
            var flxFooterPopupHowWouldUpload = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "bottom": "-60%",
                "clipBounds": false,
                "height": "350dp",
                "id": "flxFooterPopupHowWouldUpload",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "sknflxBGffffffopacity100perBorder1pxBlur5px",
                "width": "100%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxFooterPopupHowWouldUpload.setDefaultUnit(voltmx.flex.DP);
            var flxHowWouldYouTop = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "20%",
                "id": "flxHowWouldYouTop",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "CopyslFbox0a9831affa2094b",
                "top": "10dp",
                "width": "100%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxHowWouldYouTop.setDefaultUnit(voltmx.flex.DP);
            var lblHowWouldYouUploadYourDoc = new voltmx.ui.Label({
                "centerX": "50%",
                "centerY": "50%",
                "height": "100%",
                "id": "lblHowWouldYouUploadYourDoc",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknlblDubaiBold000000Font70px",
                "text": "How Would You Upload Your Document",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "width": "90%"
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxHowWouldYouTop.add(lblHowWouldYouUploadYourDoc);
            var flxOptionsToUpload = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "centerY": "45%",
                "clipBounds": false,
                "height": "45%",
                "id": "flxOptionsToUpload",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "CopyslFbox0a9831affa2094b",
                "top": "0",
                "width": "90%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxOptionsToUpload.setDefaultUnit(voltmx.flex.DP);
            var flxChooseFromFile = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": false,
                "height": "70%",
                "id": "flxChooseFromFile",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "CopysknflxCustom1",
                "top": "0",
                "width": "30%",
                "zIndex": 2,
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxChooseFromFile.setDefaultUnit(voltmx.flex.DP);
            var imgFileUpload = new voltmx.ui.Image2({
                "centerX": "50%",
                "height": "70%",
                "id": "imgFileUpload",
                "isVisible": true,
                "left": "0",
                "skin": "CopyslImage0bce6b78d7c284f",
                "src": "lucide_upload_1.png",
                "top": "0",
                "width": "70%"
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblChooseFromFile = new voltmx.ui.Label({
                "bottom": 10,
                "centerX": "50%",
                "height": "30%",
                "id": "lblChooseFromFile",
                "isVisible": true,
                "skin": "CopysknlblCPReg2",
                "text": "CHOOSE FROM FILE",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "width": "80%"
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxChooseFromFile.add(imgFileUpload, lblChooseFromFile);
            var flxChooseFromLibrary = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "centerY": "50%",
                "clipBounds": false,
                "height": "70%",
                "id": "flxChooseFromLibrary",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "10dp",
                "isModalContainer": false,
                "skin": "CopysknflxCustom1",
                "top": "0",
                "width": "30%",
                "zIndex": 2,
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxChooseFromLibrary.setDefaultUnit(voltmx.flex.DP);
            var imgGallery = new voltmx.ui.Image2({
                "centerX": "50%",
                "height": "70%",
                "id": "imgGallery",
                "isVisible": true,
                "left": "0",
                "skin": "CopyslImage0bce6b78d7c284f",
                "src": "hugeicons_image_add_02_1.png",
                "top": "0",
                "width": "70%"
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblChooseFromLibrary = new voltmx.ui.Label({
                "bottom": 10,
                "centerX": "50%",
                "height": "30%",
                "id": "lblChooseFromLibrary",
                "isVisible": true,
                "left": "0",
                "skin": "CopysknlblCPReg2",
                "text": "CHOOSE FROM GALLERY",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "width": "80%"
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxChooseFromLibrary.add(imgGallery, lblChooseFromLibrary);
            var flxTakeAaPhoto = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "bottom": "0",
                "centerY": "50%",
                "clipBounds": false,
                "height": "70%",
                "id": "flxTakeAaPhoto",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "isModalContainer": false,
                "right": "0",
                "skin": "CopysknflxCustom1",
                "width": "30%",
                "zIndex": 2,
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxTakeAaPhoto.setDefaultUnit(voltmx.flex.DP);
            var imgCamera = new voltmx.ui.Image2({
                "centerX": "50%",
                "height": "70%",
                "id": "imgCamera",
                "isVisible": true,
                "left": "0",
                "skin": "CopyslImage0bce6b78d7c284f",
                "src": "lucide_maximize_1.png",
                "top": "0",
                "width": "70%"
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblTakeAPhoto = new voltmx.ui.Label({
                "bottom": 10,
                "centerX": "50%",
                "height": "30%",
                "id": "lblTakeAPhoto",
                "isVisible": false,
                "left": "0",
                "skin": "CopysknlblCPReg2",
                "text": "TAKE A PHOTO",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "width": "80%"
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var cam = new voltmx.ui.Camera({
                "bottom": 10,
                "centerX": "50%",
                "height": "30%",
                "id": "cam",
                "isVisible": true,
                "skin": "CopysknCamCPReg",
                "text": "TAKE A PHOTO",
                "width": "80%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "accessMode": constants.CAMERA_IMAGE_ACCESS_MODE_PUBLIC,
                "enableOverlay": false,
                "enablePhotoCropFeature": false
            });
            flxTakeAaPhoto.add(imgCamera, lblTakeAPhoto, cam);
            flxOptionsToUpload.add(flxChooseFromFile, flxChooseFromLibrary, flxTakeAaPhoto);
            var btnUploadYourDoc = new voltmx.ui.Button({
                "bottom": "46dp",
                "centerX": "50%",
                "height": "17%",
                "id": "btnUploadYourDoc",
                "isVisible": true,
                "left": "0",
                "skin": "CopysknbtnCPReg",
                "text": "Save and Continue",
                "width": "90%"
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxFooterPopupHowWouldUpload.add(flxHowWouldYouTop, flxOptionsToUpload, btnUploadYourDoc);
            var flxUploadPopupClose = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "55%",
                "id": "flxUploadPopupClose",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "CopyslFbox0a9831affa2094b",
                "top": "0",
                "width": "100%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxUploadPopupClose.setDefaultUnit(voltmx.flex.DP);
            flxUploadPopupClose.add();
            flxPopupHowWouldYouUploadYourDoc.add(flxFooterPopupHowWouldUpload, flxUploadPopupClose);
            var flxUserName = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "centerY": "50%",
                "clipBounds": false,
                "height": "100%",
                "id": "flxUserName",
                "isVisible": false,
                "layoutType": voltmx.flex.FLOW_VERTICAL,
                "left": "0",
                "isModalContainer": false,
                "skin": "CopyslFbox0a9831affa2094b",
                "width": "100%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxUserName.setDefaultUnit(voltmx.flex.DP);
            var HeaderRegister3 = new com.hcl.voltmx.alwataneya1.HeaderRegister1({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "height": "10%",
                "id": "HeaderRegister3",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0dp",
                "masterType": constants.MASTER_TYPE_DEFAULT,
                "isModalContainer": false,
                "skin": "CopyslFbox0a9831affa2094b",
                "top": 0,
                "width": "100%",
                "appName": "AlwataneyaAuction",
                "overrides": {
                    "HeaderRegister1": {
                        "left": "0dp",
                        "top": 0
                    },
                    "imgAWA": {
                        "src": "logo_1_4.png"
                    },
                    "imgBack": {
                        "isVisible": true,
                        "src": "vector__1_1.png"
                    }
                }
            }, {
                "paddingInPixel": false,
                "overrides": {}
            }, {
                "overrides": {}
            });
            var flxBarContainerUserName = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": false,
                "height": "5%",
                "id": "flxBarContainerUserName",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "15dp",
                "width": "85%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxBarContainerUserName.setDefaultUnit(voltmx.flex.DP);
            var flxBarUserName = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": false,
                "height": "25%",
                "id": "flxBarUserName",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "top": "0",
                "width": "100%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxBarUserName.setDefaultUnit(voltmx.flex.DP);
            var flxInnerBarUserName = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "100%",
                "id": "flxInnerBarUserName",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "sknflxBG0077baRoundedBorder0077ba1px",
                "top": "0",
                "width": "61%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxInnerBarUserName.setDefaultUnit(voltmx.flex.DP);
            flxInnerBarUserName.add();
            flxBarUserName.add(flxInnerBarUserName);
            flxBarContainerUserName.add(flxBarUserName);
            var flxUserNameBody = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "centerX": "50.00%",
                "clipBounds": false,
                "height": "300dp",
                "id": "flxUserNameBody",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "CopyslFbox0a9831affa2094b",
                "top": "30dp",
                "width": "100%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxUserNameBody.setDefaultUnit(voltmx.flex.DP);
            var flxUser1 = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": false,
                "height": "35%",
                "id": "flxUser1",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "CopyslFbox0a9831affa2094b",
                "top": "0dp",
                "width": "90%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxUser1.setDefaultUnit(voltmx.flex.DP);
            var imgUserName = new voltmx.ui.Image2({
                "height": "50%",
                "id": "imgUserName",
                "isVisible": true,
                "left": "0dp",
                "skin": "CopyslImage0bce6b78d7c284f",
                "src": "solar_user_outline_1.png",
                "top": "0",
                "width": "60dp"
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblMyUserWillBe = new voltmx.ui.Label({
                "bottom": 0,
                "height": "50%",
                "id": "lblMyUserWillBe",
                "isVisible": true,
                "left": "10dp",
                "skin": "sknlblDubaiReg231F20Font84px",
                "text": "My username will be",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "width": voltmx.flex.USE_PREFERRED_SIZE
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxUser1.add(imgUserName, lblMyUserWillBe);
            var flxUserNameTextBox = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "centerX": "50%",
                "centerY": "50%",
                "clipBounds": false,
                "height": "28%",
                "id": "flxUserNameTextBox",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "CopyslFbox0a9831affa2094b",
                "top": 0,
                "width": "90%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxUserNameTextBox.setDefaultUnit(voltmx.flex.DP);
            var tbxUserName = new voltmx.ui.TextBox2({
                "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
                "focusSkin": "skntbxBGffffffDubaiReg231f20Font50px",
                "height": "60dp",
                "id": "tbxUserName",
                "isVisible": true,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
                "left": "0dp",
                "placeholder": "Your User Name",
                "secureTextEntry": false,
                "skin": "skntbxBGffffffDubaiReg231f20Font50px",
                "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
                "top": "10dp",
                "width": "100%"
            }, {
                "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [3, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "autoFilter": false,
                "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DEFAULT,
                "placeholderSkin": "skntxtplhrCPReg8391a1Font80px",
                "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
            });
            var flxUserNameBottomLine = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "bottom": "10dp",
                "centerX": "50%",
                "clipBounds": false,
                "height": "3%",
                "id": "flxUserNameBottomLine",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "sknflxBGdcdcdcplainborderdcdcdc1px1px",
                "width": "95%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxUserNameBottomLine.setDefaultUnit(voltmx.flex.DP);
            flxUserNameBottomLine.add();
            flxUserNameTextBox.add(tbxUserName, flxUserNameBottomLine);
            var flxUserNameFooter = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "centerY": "100%",
                "clipBounds": false,
                "height": "20%",
                "id": "flxUserNameFooter",
                "isVisible": false,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "CopyslFbox0a9831affa2094b",
                "top": "0",
                "width": "90%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxUserNameFooter.setDefaultUnit(voltmx.flex.DP);
            var imgNextUserName = new voltmx.ui.Image2({
                "height": "100%",
                "id": "imgNextUserName",
                "isVisible": true,
                "right": 0,
                "skin": "CopyslImage0bce6b78d7c284f",
                "src": "group_13213151762.png",
                "top": "0",
                "width": "25%"
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxUserNameFooter.add(imgNextUserName);
            var flxUserNameError = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "centerY": "70%",
                "clipBounds": false,
                "height": "15%",
                "id": "flxUserNameError",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "CopyslFbox0a9831affa2094b",
                "top": "0",
                "width": "85%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxUserNameError.setDefaultUnit(voltmx.flex.DP);
            var lblUserNameError = new voltmx.ui.Label({
                "height": "50%",
                "id": "lblUserNameError",
                "isVisible": true,
                "left": "0",
                "skin": "sknlblDubaiRegff0000Font40px",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "0",
                "width": "80%"
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxUserNameError.add(lblUserNameError);
            flxUserNameBody.add(flxUser1, flxUserNameTextBox, flxUserNameFooter, flxUserNameError);
            flxUserName.add(HeaderRegister3, flxBarContainerUserName, flxUserNameBody);
            var flxPassWordAndConfirmPassWord = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "100%",
                "id": "flxPassWordAndConfirmPassWord",
                "isVisible": false,
                "layoutType": voltmx.flex.FLOW_VERTICAL,
                "left": "0",
                "isModalContainer": false,
                "skin": "CopyslFbox0a9831affa2094b",
                "top": "0",
                "width": "100%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxPassWordAndConfirmPassWord.setDefaultUnit(voltmx.flex.DP);
            var HeaderRegister1 = new com.hcl.voltmx.alwataneya1.HeaderRegister1({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "height": "10%",
                "id": "HeaderRegister1",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0",
                "masterType": constants.MASTER_TYPE_DEFAULT,
                "isModalContainer": false,
                "skin": "CopyslFbox0a9831affa2094b",
                "top": "0dp",
                "width": "100%",
                "appName": "AlwataneyaAuction",
                "overrides": {
                    "HeaderRegister1": {
                        "centerY": "viz.val_cleared",
                        "top": "0dp"
                    },
                    "imgAWA": {
                        "src": "logo_1_4.png"
                    },
                    "imgBack": {
                        "isVisible": true,
                        "src": "vector__1_1.png"
                    }
                }
            }, {
                "paddingInPixel": false,
                "overrides": {}
            }, {
                "overrides": {}
            });
            var flxBarContainerPassConfo = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": false,
                "height": "5%",
                "id": "flxBarContainerPassConfo",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "5dp",
                "width": "85%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxBarContainerPassConfo.setDefaultUnit(voltmx.flex.DP);
            var flxBarPassConfo = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": false,
                "height": "25%",
                "id": "flxBarPassConfo",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "top": "0",
                "width": "100%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxBarPassConfo.setDefaultUnit(voltmx.flex.DP);
            var flxInnerBarPassConfo = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "100%",
                "id": "flxInnerBarPassConfo",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "sknflxBG0077baRoundedBorder0077ba1px",
                "top": "0",
                "width": "80%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxInnerBarPassConfo.setDefaultUnit(voltmx.flex.DP);
            flxInnerBarPassConfo.add();
            flxBarPassConfo.add(flxInnerBarPassConfo);
            flxBarContainerPassConfo.add(flxBarPassConfo);
            var flxPassWordBody = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "centerX": "50.00%",
                "clipBounds": false,
                "id": "flxPassWordBody",
                "isVisible": true,
                "layoutType": voltmx.flex.FLOW_VERTICAL,
                "left": "0",
                "isModalContainer": false,
                "skin": "CopyslFbox0e12c46d9132a48",
                "top": "10dp",
                "width": "100%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxPassWordBody.setDefaultUnit(voltmx.flex.DP);
            var flxPassWordHead = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": false,
                "height": "100dp",
                "id": "flxPassWordHead",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "CopyslFbox0a9831affa2094b",
                "top": "0dp",
                "width": "90%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxPassWordHead.setDefaultUnit(voltmx.flex.DP);
            var imgPassWord = new voltmx.ui.Image2({
                "height": "35%",
                "id": "imgPassWord",
                "isVisible": true,
                "left": "6dp",
                "skin": "CopyslImage0bce6b78d7c284f",
                "src": "mingcute_lock_line.png",
                "top": "21dp",
                "width": "35dp"
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblMyPassWordWillBe = new voltmx.ui.Label({
                "bottom": -2,
                "height": "45%",
                "id": "lblMyPassWordWillBe",
                "isVisible": true,
                "left": "10dp",
                "skin": "sknlblDubaiReg231f20Font70px",
                "text": "My Password will be",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "width": voltmx.flex.USE_PREFERRED_SIZE
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxPassWordHead.add(imgPassWord, lblMyPassWordWillBe);
            var flxPassWordTextBox = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "bottom": "36dp",
                "centerX": "50.00%",
                "clipBounds": false,
                "height": "60dp",
                "id": "flxPassWordTextBox",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "CopyslFbox0a9831affa2094b",
                "top": "0",
                "width": "90%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxPassWordTextBox.setDefaultUnit(voltmx.flex.DP);
            var tbxPassWordName = new voltmx.ui.TextBox2({
                "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
                "focusSkin": "skntbxBGffffffDubaiReg231f20Font50px",
                "height": "60dp",
                "id": "tbxPassWordName",
                "isVisible": true,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
                "left": "0dp",
                "placeholder": "Password",
                "secureTextEntry": true,
                "skin": "skntbxBGffffffDubaiReg231f20Font50px",
                "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
                "top": "1dp",
                "width": "100%"
            }, {
                "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [3, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "autoFilter": false,
                "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DEFAULT,
                "placeholderSkin": "skntxtplhrCPReg8391a1Font80px",
                "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
            });
            var flxPassWordBottomLine = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "bottom": "7dp",
                "centerX": "50%",
                "clipBounds": false,
                "height": "3%",
                "id": "flxPassWordBottomLine",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "sknflxBGdcdcdcplainborderdcdcdc1px1px",
                "width": "95%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxPassWordBottomLine.setDefaultUnit(voltmx.flex.DP);
            flxPassWordBottomLine.add();
            var flxEyeIconPass = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": false,
                "height": "40dp",
                "id": "flxEyeIconPass",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "isModalContainer": false,
                "right": "10dp",
                "skin": "slFbox",
                "top": "0",
                "width": "20%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxEyeIconPass.setDefaultUnit(voltmx.flex.DP);
            var imgEyeOpenPass = new voltmx.ui.Image2({
                "centerX": "50%",
                "centerY": "50%",
                "height": "45%",
                "id": "imgEyeOpenPass",
                "isVisible": false,
                "left": "0",
                "skin": "slImage",
                "src": "eyeopen.png",
                "top": "0",
                "width": "45%"
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var imgEyeClosePass = new voltmx.ui.Image2({
                "centerX": "53%",
                "centerY": "48%",
                "height": "50%",
                "id": "imgEyeClosePass",
                "isVisible": false,
                "left": "0",
                "skin": "slImage",
                "src": "vector__10_.png",
                "top": "0",
                "width": "50%"
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxEyeIconPass.add(imgEyeOpenPass, imgEyeClosePass);
            flxPassWordTextBox.add(tbxPassWordName, flxPassWordBottomLine, flxEyeIconPass);
            var flxPassWordError = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "centerX": "50%",
                "clipBounds": false,
                "id": "flxPassWordError",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "CopyslFbox0a9831affa2094b",
                "top": "0",
                "width": "85%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxPassWordError.setDefaultUnit(voltmx.flex.DP);
            var lblPassWordError = new voltmx.ui.Label({
                "id": "lblPassWordError",
                "isVisible": false,
                "left": "0",
                "skin": "sknlblDubaiRegff0000Font40px",
                "text": "*  Atleast 8 Characters     *  Lower & UpperCase    *  Special  characters ",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "0dp",
                "width": "38%"
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblPassWordRequired = new voltmx.ui.Label({
                "id": "lblPassWordRequired",
                "isVisible": false,
                "left": "0",
                "skin": "sknlblDubaiRegff0000Font40px",
                "text": "*Password required!!",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "0",
                "width": voltmx.flex.USE_PREFERRED_SIZE
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxPassWordError.add(lblPassWordError, lblPassWordRequired);
            flxPassWordBody.add(flxPassWordHead, flxPassWordTextBox, flxPassWordError);
            var flxConfirmPassWord = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "centerX": "50%",
                "clipBounds": false,
                "id": "flxConfirmPassWord",
                "isVisible": true,
                "layoutType": voltmx.flex.FLOW_VERTICAL,
                "left": "0",
                "isModalContainer": false,
                "skin": "CopyslFbox0a7ccfd5bfb7c43",
                "top": "0dp",
                "width": "96%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxConfirmPassWord.setDefaultUnit(voltmx.flex.DP);
            var lblConfirmPasswordWillbe = new voltmx.ui.Label({
                "bottom": 0,
                "centerX": "50%",
                "height": "45dp",
                "id": "lblConfirmPasswordWillbe",
                "isVisible": true,
                "left": "10dp",
                "skin": "sknlblDubaiReg231f20Font70px",
                "text": "Confirm Password will be",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "0dp",
                "width": "90%"
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var flxConfirmPassWordTextBox = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": false,
                "height": "60dp",
                "id": "flxConfirmPassWordTextBox",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "CopyslFbox0a9831affa2094b",
                "top": "0dp",
                "width": "90%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxConfirmPassWordTextBox.setDefaultUnit(voltmx.flex.DP);
            var tbxConfirmPassWord = new voltmx.ui.TextBox2({
                "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
                "focusSkin": "skntbxBGffffffDubaiReg231f20Font50px",
                "height": "60dp",
                "id": "tbxConfirmPassWord",
                "isVisible": true,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
                "left": "0dp",
                "placeholder": "Confirm Password",
                "secureTextEntry": true,
                "skin": "skntbxBGffffffDubaiReg231f20Font50px",
                "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
                "top": "1dp",
                "width": "100%"
            }, {
                "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [1, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "autoFilter": false,
                "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DEFAULT,
                "placeholderSkin": "skntxtplhrCPReg8391a1Font80px",
                "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
            });
            var flxConfirmPassWordBottomLine = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "bottom": "3dp",
                "centerX": "50%",
                "clipBounds": false,
                "height": "3%",
                "id": "flxConfirmPassWordBottomLine",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "sknflxBGdcdcdcplainborderdcdcdc1px1px",
                "width": "100%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxConfirmPassWordBottomLine.setDefaultUnit(voltmx.flex.DP);
            flxConfirmPassWordBottomLine.add();
            var flxEyeIconConfirmPass = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": false,
                "height": "60%",
                "id": "flxEyeIconConfirmPass",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "isModalContainer": false,
                "right": "10dp",
                "skin": "slFbox",
                "top": "0",
                "width": "20%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxEyeIconConfirmPass.setDefaultUnit(voltmx.flex.DP);
            var imgEyeOpenConfirmPass = new voltmx.ui.Image2({
                "centerX": "50%",
                "centerY": "50%",
                "height": "50%",
                "id": "imgEyeOpenConfirmPass",
                "isVisible": false,
                "left": "0",
                "skin": "slImage",
                "src": "eyeopen.png",
                "top": "0",
                "width": "50%"
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var imgEyeCloseConfirmPass = new voltmx.ui.Image2({
                "centerX": "50%",
                "centerY": "50%",
                "height": "50%",
                "id": "imgEyeCloseConfirmPass",
                "isVisible": false,
                "left": "0",
                "skin": "slImage",
                "src": "vector__10_.png",
                "top": "0",
                "width": "50%"
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxEyeIconConfirmPass.add(imgEyeOpenConfirmPass, imgEyeCloseConfirmPass);
            flxConfirmPassWordTextBox.add(tbxConfirmPassWord, flxConfirmPassWordBottomLine, flxEyeIconConfirmPass);
            var flxConfirmPasswordError = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "bottom": 26,
                "centerX": "50%",
                "clipBounds": false,
                "id": "flxConfirmPasswordError",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "CopyslFbox0a9831affa2094b",
                "top": "0",
                "width": "95%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxConfirmPasswordError.setDefaultUnit(voltmx.flex.DP);
            var lblPassWordShouldMatchConfirmPassword = new voltmx.ui.Label({
                "id": "lblPassWordShouldMatchConfirmPassword",
                "isVisible": false,
                "left": "0",
                "skin": "sknlblDubaiRegff0000Font40px",
                "text": "*PassWord Should Match Confirm Password",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "0",
                "width": "80%"
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblConfirmPasswordRequired = new voltmx.ui.Label({
                "id": "lblConfirmPasswordRequired",
                "isVisible": false,
                "left": "0",
                "skin": "sknlblDubaiRegff0000Font40px",
                "text": "*Confirm Your Password !!",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "0",
                "width": voltmx.flex.USE_PREFERRED_SIZE
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxConfirmPasswordError.add(lblPassWordShouldMatchConfirmPassword, lblConfirmPasswordRequired);
            flxConfirmPassWord.add(lblConfirmPasswordWillbe, flxConfirmPassWordTextBox, flxConfirmPasswordError);
            var flxHaveReadTerms = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": false,
                "height": "5%",
                "id": "flxHaveReadTerms",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "CopyslFbox0a9831affa2094b",
                "top": "0dp",
                "width": "85%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxHaveReadTerms.setDefaultUnit(voltmx.flex.DP);
            var chxIhaveReadTermsNConds = new voltmx.ui.CheckBoxGroup({
                "centerX": "50%",
                "height": "70%",
                "id": "chxIhaveReadTermsNConds",
                "isVisible": true,
                "left": "0",
                "masterData": [
                    ["selectedKeyTerms", "I have read & agreed"]
                ],
                "skin": "sknchxDubaiReg2f2f2fFont45px",
                "top": "0",
                "width": "95%"
            }, {
                "itemOrientation": constants.CHECKBOX_ITEM_ORIENTATION_VERTICAL,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "tickedImage": "checkedcheck.png",
                "untickedImage": "uncheckedcheck.png"
            });
            var lblTermsNConditions = new voltmx.ui.Label({
                "centerX": "68%",
                "centerY": "26%",
                "height": "70%",
                "id": "lblTermsNConditions",
                "isVisible": true,
                "right": 0,
                "skin": "sknlblDubaiReg333333Font45px",
                "text": "terms and Conditions",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "0dp",
                "width": "45%"
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxHaveReadTerms.add(chxIhaveReadTermsNConds, lblTermsNConditions);
            var btnSaveAndContinueForTermsNConditions = new voltmx.ui.Button({
                "centerX": "50%",
                "height": "50dp",
                "id": "btnSaveAndContinueForTermsNConditions",
                "isVisible": false,
                "left": "0",
                "text": "Save and continue",
                "top": "50dp",
                "width": "300dp"
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxPassWordAndConfirmPassWord.add(HeaderRegister1, flxBarContainerPassConfo, flxPassWordBody, flxConfirmPassWord, flxHaveReadTerms, btnSaveAndContinueForTermsNConditions);
            var flxTermsAndConditions = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "centerY": "50%",
                "clipBounds": false,
                "height": "100%",
                "id": "flxTermsAndConditions",
                "isVisible": false,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "CopyslFbox0a9831affa2094b",
                "top": "50dp",
                "width": "100%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxTermsAndConditions.setDefaultUnit(voltmx.flex.DP);
            var flxTermsAndConditionsBody = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": false,
                "height": "25%",
                "id": "flxTermsAndConditionsBody",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "CopyCopyslFbox0g50a542f3af245",
                "top": 150,
                "width": "95%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxTermsAndConditionsBody.setDefaultUnit(voltmx.flex.DP);
            var flxPara1 = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "50%",
                "id": "flxPara1",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "CopyslFbox0a9831affa2094b",
                "top": "0",
                "width": "100%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxPara1.setDefaultUnit(voltmx.flex.DP);
            var lblPara1 = new voltmx.ui.Label({
                "centerX": "50%",
                "centerY": "50%",
                "height": "100%",
                "id": "lblPara1",
                "isVisible": true,
                "skin": "sknlblCPReg000000Font46px",
                "text": "In Order  to sell your Vehicles on the Al Wataneya \n auctions platform, You need to execute a contract with us.",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "0",
                "width": "90%"
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxPara1.add(lblPara1);
            var flxPara2 = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "bottom": 0,
                "centerX": "50%",
                "clipBounds": false,
                "height": "49%",
                "id": "flxPara2",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "CopyslFbox0a9831affa2094b",
                "width": "90%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxPara2.setDefaultUnit(voltmx.flex.DP);
            var lblPara2 = new voltmx.ui.Label({
                "centerX": "50%",
                "height": "100%",
                "id": "lblPara2",
                "isVisible": true,
                "left": "0",
                "skin": "sknlblCPReg000000Font46px",
                "text": "Please download the auction Terms & Conditions, Digitally sign the document and re-upload to complete the registration.",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "0",
                "width": "100%"
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxPara2.add(lblPara2);
            flxTermsAndConditionsBody.add(flxPara1, flxPara2);
            var flxDownLoadTermsAndConditions = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "6%",
                "id": "flxDownLoadTermsAndConditions",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "CopyslFbox0a9831affa2094b",
                "top": 330,
                "width": "100%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxDownLoadTermsAndConditions.setDefaultUnit(voltmx.flex.DP);
            var imgDocuments = new voltmx.ui.Image2({
                "centerY": "50%",
                "height": "80%",
                "id": "imgDocuments",
                "isVisible": true,
                "left": 30,
                "skin": "CopyslImage0bce6b78d7c284f",
                "src": "material_icon_theme_pdf_1.png",
                "top": "0",
                "width": "10%"
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblDownloadTermsAndConditions = new voltmx.ui.Label({
                "centerX": "55%",
                "centerY": "50%",
                "id": "lblDownloadTermsAndConditions",
                "isVisible": true,
                "skin": "CopysknlblCPReg0c1c763bd54d345",
                "text": "Download terms and Conditions",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "width": "70%"
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxDownLoadTermsAndConditions.add(imgDocuments, lblDownloadTermsAndConditions);
            var flxUploadedSignedDocs = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "bottom": "125dp",
                "centerX": "50%",
                "clipBounds": false,
                "height": "14%",
                "id": "flxUploadedSignedDocs",
                "isVisible": false,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "CopyslFbox0a9831affa2094b",
                "top": 340,
                "width": "90%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxUploadedSignedDocs.setDefaultUnit(voltmx.flex.DP);
            var lblUploadSignedDocs = new voltmx.ui.Label({
                "centerY": "50%",
                "height": "90%",
                "id": "lblUploadSignedDocs",
                "isVisible": false,
                "left": "25dp",
                "skin": "CopysknlblCPReg0c1c763bd54d345",
                "text": "Upload Signed Documents",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "width": "50%"
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var btnUploadSigned = new voltmx.ui.Button({
                "focusSkin": "defBtnFocus",
                "height": "40%",
                "id": "btnUploadSigned",
                "isVisible": true,
                "left": "10dp",
                "onClick": controller.AS_Button_d580143339e4470fb745e37e5eca9e0d,
                "skin": "CopydefBtnNormal0d91da1606d7146",
                "text": "Upload  Signed Documents",
                "top": "0",
                "width": "90%"
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxUploadedSignedDocs.add(lblUploadSignedDocs, btnUploadSigned);
            var flxIHaveRead = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": false,
                "height": "5%",
                "id": "flxIHaveRead",
                "isVisible": false,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "CopyslFbox0a9831affa2094b",
                "top": "400dp",
                "width": "85%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxIHaveRead.setDefaultUnit(voltmx.flex.DP);
            var lblTermsAndConditions = new voltmx.ui.Label({
                "centerX": "66%",
                "centerY": "25%",
                "height": "70%",
                "id": "lblTermsAndConditions",
                "isVisible": true,
                "right": 0,
                "skin": "sknlblDubaiReg333333Font45px",
                "text": "terms and Conditions",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "0dp",
                "width": "40%"
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxIHaveRead.add(lblTermsAndConditions);
            var HeaderRegister2 = new com.hcl.voltmx.alwataneya1.HeaderRegister1({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "height": "10%",
                "id": "HeaderRegister2",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0",
                "masterType": constants.MASTER_TYPE_DEFAULT,
                "isModalContainer": false,
                "skin": "CopyslFbox0a9831affa2094b",
                "top": 0,
                "width": "100%",
                "appName": "AlwataneyaAuction",
                "overrides": {
                    "imgBack": {
                        "isVisible": true
                    }
                }
            }, {
                "paddingInPixel": false,
                "overrides": {}
            }, {
                "overrides": {}
            });
            flxTermsAndConditions.add(flxTermsAndConditionsBody, flxDownLoadTermsAndConditions, flxUploadedSignedDocs, flxIHaveRead, HeaderRegister2);
            var flxCongratulations = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "bottom": "-20dp",
                "centerX": "50%",
                "centerY": "50%",
                "clipBounds": false,
                "height": "100%",
                "id": "flxCongratulations",
                "isVisible": false,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "10dp",
                "isModalContainer": false,
                "skin": "sknflxBG000000Opacity50per",
                "top": "10dp",
                "width": "100%",
                "zIndex": 2,
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxCongratulations.setDefaultUnit(voltmx.flex.DP);
            var flxMiddleCongratulations = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "centerY": "55%",
                "clipBounds": false,
                "height": "55%",
                "id": "flxMiddleCongratulations",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "sknflxBGffffffopacity100perBorder1pxBlur5px",
                "width": "90%",
                "zIndex": 2,
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxMiddleCongratulations.setDefaultUnit(voltmx.flex.DP);
            var flxImages = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": false,
                "height": "28%",
                "id": "flxImages",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "sknFlxBasic",
                "top": "8dp",
                "width": "90%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxImages.setDefaultUnit(voltmx.flex.DP);
            var imgCongrats = new voltmx.ui.Image2({
                "centerX": "55%",
                "height": "100%",
                "id": "imgCongrats",
                "isVisible": true,
                "left": "0",
                "skin": "CopyslImage0bce6b78d7c284f",
                "src": "group_1067_1.png",
                "top": 5,
                "width": "70%"
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var flxClose = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "centerY": "20%",
                "clipBounds": false,
                "height": "30%",
                "id": "flxClose",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "isModalContainer": false,
                "right": 0,
                "skin": "slFbox",
                "top": "0dp",
                "width": "15%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxClose.setDefaultUnit(voltmx.flex.DP);
            var imgClose = new voltmx.ui.Image2({
                "centerX": "50%",
                "centerY": "50%",
                "height": "100%",
                "id": "imgClose",
                "isVisible": true,
                "right": 0,
                "skin": "CopyslImage0bce6b78d7c284f",
                "src": "x_close_1.png",
                "top": "0",
                "width": "100%"
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxClose.add(imgClose);
            flxImages.add(imgCongrats, flxClose);
            var flxContent = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "bottom": 0,
                "clipBounds": false,
                "height": "72%",
                "id": "flxContent",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "CopyslFbox0a9831affa2094b",
                "width": "100%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxContent.setDefaultUnit(voltmx.flex.DP);
            var flxCongrats = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": false,
                "height": "22%",
                "id": "flxCongrats",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "CopyslFbox0a9831affa2094b",
                "top": 0,
                "width": "90%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxCongrats.setDefaultUnit(voltmx.flex.DP);
            var lblCongratulations = new voltmx.ui.Label({
                "centerX": "50%",
                "height": "100%",
                "id": "lblCongratulations",
                "isVisible": true,
                "skin": "sknlblDubaiBold000000Font65px",
                "text": "Your Application Has Been Submitted!!",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "0",
                "width": "100%"
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxCongrats.add(lblCongratulations);
            var flxThanks = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": false,
                "height": "30%",
                "id": "flxThanks",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "CopyslFbox0a9831affa2094b",
                "top": 60,
                "width": "90%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxThanks.setDefaultUnit(voltmx.flex.DP);
            var lblThanks = new voltmx.ui.Label({
                "centerX": "50%",
                "height": "100%",
                "id": "lblThanks",
                "isVisible": true,
                "skin": "sknlblDubaiLt575859Font40px",
                "text": "Thank you for applying to become a seller on our platform.\n Your account is currently under review and our team will get back to you within 24-48 hours.",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "0",
                "width": "99%"
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxThanks.add(lblThanks);
            var flxContact = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "10%",
                "id": "flxContact",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "CopyslFbox0a9831affa2094b",
                "top": 145,
                "width": "100%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxContact.setDefaultUnit(voltmx.flex.DP);
            var lblContact = new voltmx.ui.Label({
                "centerX": "50%",
                "height": "100%",
                "id": "lblContact",
                "isVisible": true,
                "skin": "sknlblDubaiLt575859Font35px",
                "text": "We’ll notify you via email once your account is approved.",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "0",
                "width": "95%"
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxContact.add(lblContact);
            var flxCallForOtherAssistance = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "centerX": "50.01%",
                "clipBounds": false,
                "height": "18%",
                "id": "flxCallForOtherAssistance",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "CopyslFbox0a9831affa2094b",
                "top": "170dp",
                "width": "95%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxCallForOtherAssistance.setDefaultUnit(voltmx.flex.DP);
            var flxCall1 = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": false,
                "height": "50%",
                "id": "flxCall1",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "CopyslFbox0a9831affa2094b",
                "top": 0,
                "width": "100%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxCall1.setDefaultUnit(voltmx.flex.DP);
            var imgPhone = new voltmx.ui.Image2({
                "centerY": "50%",
                "height": "70%",
                "id": "imgPhone",
                "isVisible": true,
                "left": "0dp",
                "skin": "CopyslImage0bce6b78d7c284f",
                "src": "input_right_section_1.png",
                "top": "0",
                "width": "10%"
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblCallForFurtherAssisstance = new voltmx.ui.Label({
                "centerX": "50%",
                "centerY": "50%",
                "height": "100%",
                "id": "lblCallForFurtherAssisstance",
                "isVisible": true,
                "left": "0",
                "skin": "sknlblDubaiReg231f20Font32px",
                "text": "If you have any questions in the meantime, feel free to ",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "0",
                "width": "80%"
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxCall1.add(imgPhone, lblCallForFurtherAssisstance);
            var lblMobileNumber = new voltmx.ui.Label({
                "bottom": 10,
                "centerX": "50%",
                "height": "40%",
                "id": "lblMobileNumber",
                "isVisible": true,
                "skin": "sknlbl6c727fDubaiLtFont32px",
                "text": "+971 (555) 000-0000",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "width": "80%"
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxCallForOtherAssistance.add(flxCall1, lblMobileNumber);
            var btnOkay = new voltmx.ui.Button({
                "bottom": 22,
                "centerX": "50%",
                "height": "45dp",
                "id": "btnOkay",
                "isVisible": true,
                "left": "11dp",
                "onClick": controller.AS_Button_f360137c76104beca92ecc7e21519f12,
                "skin": "sknbtnBGd32437CstmBorder5pxDubaiRegffffffSize70px",
                "text": "CLOSE",
                "width": "85%"
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxContent.add(flxCongrats, flxThanks, flxContact, flxCallForOtherAssistance, btnOkay);
            flxMiddleCongratulations.add(flxImages, flxContent);
            var CopyflxSellerRegisterPopupClose0c3cf06d19b384f = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "25%",
                "id": "CopyflxSellerRegisterPopupClose0c3cf06d19b384f",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "CopyslFbox0a9831affa2094b",
                "top": "0",
                "width": "100%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            CopyflxSellerRegisterPopupClose0c3cf06d19b384f.setDefaultUnit(voltmx.flex.DP);
            CopyflxSellerRegisterPopupClose0c3cf06d19b384f.add();
            flxCongratulations.add(flxMiddleCongratulations, CopyflxSellerRegisterPopupClose0c3cf06d19b384f);
            flxMain.add(flxSellerOrBuyerMain, flxPopupSellerOrBuyer, flxPopupTrade, flxEmailContainer, flxCompanyName, flxTradeLicense, flxTradeLicenseExpiryDate, flxEmailVerificationCode, flxMobileContainer, flxMobileVerifyAndOTPCode, flxPopupHowWouldYouUploadYourDoc, flxUserName, flxPassWordAndConfirmPassWord, flxTermsAndConditions, flxCongratulations);
            this.add(flxMain);
        };
        return [{
            "addWidgets": addWidgetsfrmRegister2,
            "enabledForIdleTimeout": false,
            "id": "frmRegister2",
            "layoutType": voltmx.flex.FREE_FORM,
            "needAppMenu": false,
            "skin": "CopyslForm0d2f85bd045d44e",
            "appName": "AlwataneyaAuction"
        }, {
            "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
            "layoutType": voltmx.flex.FREE_FORM,
            "paddingInPixel": false
        }, {
            "footerOverlap": false,
            "headerOverlap": false,
            "menuPosition": constants.FORM_MENU_POSITION_AFTER_APPMENU,
            "retainScrollPosition": false,
            "titleBar": true,
            "titleBarSkin": "CopyslTitleBar0fde7ba532e1640",
            "windowSoftInputMode": constants.FORM_ADJUST_PAN
        }]
    }
});