define("frmAuctionCategories", function() {
    return function(controller) {
        function addWidgetsfrmAuctionCategories() {
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
                "skin": "slFbox",
                "top": "0",
                "width": "100%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxMain.setDefaultUnit(voltmx.flex.DP);
            var flxHeader = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "100%",
                "id": "flxHeader",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0",
                "width": "100%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxHeader.setDefaultUnit(voltmx.flex.DP);
            var Header2WithLatestMenu = new com.hcl.voltmx.Alwataneya2.Header2WithLatestMenu({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "height": "100%",
                "id": "Header2WithLatestMenu",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0dp",
                "masterType": constants.MASTER_TYPE_DEFAULT,
                "isModalContainer": false,
                "skin": "CopyslFbox5",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1,
                "appName": "AlwataneyaAuction",
                "overrides": {
                    "flxFilterFromHeader": {
                        "isVisible": false
                    }
                }
            }, {
                "paddingInPixel": false,
                "overrides": {}
            }, {
                "overrides": {}
            });
            flxHeader.add(Header2WithLatestMenu);
            var FlexScrollGroup0b6e90b2bf55e48 = new voltmx.ui.FlexScrollContainer({
                "allowHorizontalBounce": false,
                "allowVerticalBounce": true,
                "bounces": true,
                "clipBounds": true,
                "enableScrolling": true,
                "height": "80%",
                "horizontalScrollIndicator": true,
                "id": "FlexScrollGroup0b6e90b2bf55e48",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0dp",
                "pagingEnabled": false,
                "scrollDirection": voltmx.flex.SCROLL_VERTICAL,
                "skin": "slFSbox",
                "top": "10%",
                "verticalScrollIndicator": true,
                "width": "100%",
                "zIndex": 2
            }, {
                "paddingInPixel": false
            }, {});
            FlexScrollGroup0b6e90b2bf55e48.setDefaultUnit(voltmx.flex.DP);
            var flxBody = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "bottom": "0",
                "centerX": "50%",
                "clipBounds": true,
                "height": "800dp",
                "id": "flxBody",
                "isVisible": true,
                "layoutType": voltmx.flex.FLOW_VERTICAL,
                "left": "0",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0%",
                "width": "95%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxBody.setDefaultUnit(voltmx.flex.DP);
            var flxHeading = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "50dp",
                "id": "flxHeading",
                "isVisible": true,
                "layoutType": voltmx.flex.FLOW_VERTICAL,
                "left": "0",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxHeading.setDefaultUnit(voltmx.flex.DP);
            var lblAuctionCategories = new voltmx.ui.Label({
                "height": 30,
                "id": "lblAuctionCategories",
                "isVisible": true,
                "left": "0",
                "skin": "CopydefLabel0je3ae873713a48",
                "text": "AUCTIONS CATEGORIES",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "0dp",
                "width": "100%"
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var CopyflxUnderLineContainer0c2064eb597744b = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "8dp",
                "id": "CopyflxUnderLineContainer0c2064eb597744b",
                "isVisible": true,
                "layoutType": voltmx.flex.FLOW_HORIZONTAL,
                "left": "0",
                "isModalContainer": false,
                "skin": "CopyslFbox5",
                "top": "0dp",
                "width": "100%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            CopyflxUnderLineContainer0c2064eb597744b.setDefaultUnit(voltmx.flex.DP);
            var CopyflxUL0b0601b8e8ad34c = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "6dp",
                "id": "CopyflxUL0b0601b8e8ad34c",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": 0,
                "isModalContainer": false,
                "skin": "sknFlxOrangePlainDark",
                "top": "2dp",
                "width": "13%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            CopyflxUL0b0601b8e8ad34c.setDefaultUnit(voltmx.flex.DP);
            CopyflxUL0b0601b8e8ad34c.add();
            var CopyflxUL0j1859389c2564e = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "6dp",
                "id": "CopyflxUL0j1859389c2564e",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "3dp",
                "isModalContainer": false,
                "skin": "sknFlxPlainea4235Plainopa10",
                "top": "2dp",
                "width": "5%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            CopyflxUL0j1859389c2564e.setDefaultUnit(voltmx.flex.DP);
            CopyflxUL0j1859389c2564e.add();
            CopyflxUnderLineContainer0c2064eb597744b.add(CopyflxUL0b0601b8e8ad34c, CopyflxUL0j1859389c2564e);
            flxHeading.add(lblAuctionCategories, CopyflxUnderLineContainer0c2064eb597744b);
            var flxCarDetailsBody = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "clipBounds": false,
                "id": "flxCarDetailsBody",
                "isVisible": true,
                "layoutType": voltmx.flex.FLOW_VERTICAL,
                "left": "0",
                "isModalContainer": false,
                "skin": "CopyslFbox0aa9a00d1af824d",
                "top": "10dp",
                "width": "100%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxCarDetailsBody.setDefaultUnit(voltmx.flex.DP);
            var flx1 = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": false,
                "height": "180dp",
                "id": "flx1",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "CopyslFbox0dd72fcc931dd44",
                "top": "0dp",
                "width": "95%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flx1.setDefaultUnit(voltmx.flex.DP);
            var flxVehicles = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "100%",
                "id": "flxVehicles",
                "isVisible": true,
                "layoutType": voltmx.flex.FLOW_VERTICAL,
                "left": "0",
                "isModalContainer": false,
                "skin": "sknlblRoundedCorner1pxffffffShadow5px",
                "top": "0",
                "width": "48%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxVehicles.setDefaultUnit(voltmx.flex.DP);
            var imgCar = new voltmx.ui.Image2({
                "centerX": "50%",
                "height": "50%",
                "id": "imgCar",
                "isVisible": true,
                "left": "0",
                "skin": "slImage",
                "src": "auccalitem1.png",
                "top": "20dp",
                "width": "50%"
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblVehicles = new voltmx.ui.Label({
                "centerX": "50%",
                "id": "lblVehicles",
                "isVisible": true,
                "skin": "sknlblCPReg000000Font60px",
                "text": "VEHICLES",
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
            flxVehicles.add(imgCar, lblVehicles);
            var flxProperties = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "100%",
                "id": "flxProperties",
                "isVisible": true,
                "layoutType": voltmx.flex.FLOW_VERTICAL,
                "isModalContainer": false,
                "right": 0,
                "skin": "sknlblRoundedCorner1pxffffffShadow5px",
                "top": "0",
                "width": "48%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxProperties.setDefaultUnit(voltmx.flex.DP);
            var imgProperties = new voltmx.ui.Image2({
                "centerX": "50%",
                "height": "50%",
                "id": "imgProperties",
                "isVisible": true,
                "left": "0",
                "skin": "slImage",
                "src": "auccalitem2.png",
                "top": "20dp",
                "width": "50%"
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblProperties = new voltmx.ui.Label({
                "bottom": "0dp",
                "centerX": "50%",
                "height": "20%",
                "id": "lblProperties",
                "isVisible": true,
                "skin": "sknlblCPReg000000Font60px",
                "text": "PROPERTIES",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "0",
                "width": voltmx.flex.USE_PREFERRED_SIZE
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxProperties.add(imgProperties, lblProperties);
            flx1.add(flxVehicles, flxProperties);
            var flx2 = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": false,
                "height": "180dp",
                "id": "flx2",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "10dp",
                "isModalContainer": false,
                "skin": "CopyslFbox0dd72fcc931dd44",
                "top": "10dp",
                "width": "98%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flx2.setDefaultUnit(voltmx.flex.DP);
            var flxLicenesPlates = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "100%",
                "id": "flxLicenesPlates",
                "isVisible": true,
                "layoutType": voltmx.flex.FLOW_VERTICAL,
                "left": "0",
                "isModalContainer": false,
                "skin": "sknlblRoundedCorner1pxffffffShadow5px",
                "top": "0",
                "width": "48%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxLicenesPlates.setDefaultUnit(voltmx.flex.DP);
            var imglicensePlates = new voltmx.ui.Image2({
                "centerX": "50%",
                "height": "50%",
                "id": "imglicensePlates",
                "isVisible": true,
                "left": "0",
                "skin": "slImage",
                "src": "auccalitem3.png",
                "top": "20dp",
                "width": "50%"
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblLicensePlate = new voltmx.ui.Label({
                "bottom": "10dp",
                "centerX": "50%",
                "height": "20%",
                "id": "lblLicensePlate",
                "isVisible": true,
                "skin": "sknlblCPReg000000Font60px",
                "text": "LICENSE PLATE",
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
            flxLicenesPlates.add(imglicensePlates, lblLicensePlate);
            var flxEquipment = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "100%",
                "id": "flxEquipment",
                "isVisible": true,
                "layoutType": voltmx.flex.FLOW_VERTICAL,
                "isModalContainer": false,
                "right": 0,
                "skin": "sknlblRoundedCorner1pxffffffShadow5px",
                "top": "0",
                "width": "48%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxEquipment.setDefaultUnit(voltmx.flex.DP);
            var imgEquipment = new voltmx.ui.Image2({
                "centerX": "50%",
                "height": "50%",
                "id": "imgEquipment",
                "isVisible": true,
                "left": "0",
                "skin": "slImage",
                "src": "auccalitem4.png",
                "top": "20dp",
                "width": "50%"
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblEquipment = new voltmx.ui.Label({
                "bottom": "0dp",
                "height": "28%",
                "id": "lblEquipment",
                "isVisible": true,
                "left": "0dp",
                "skin": "sknlblCPReg000000Font60px",
                "text": "EQUIPMENT & MACHINERY",
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
            flxEquipment.add(imgEquipment, lblEquipment);
            flx2.add(flxLicenesPlates, flxEquipment);
            var flx3 = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "bottom": "100dp",
                "centerX": "50%",
                "clipBounds": false,
                "height": "180dp",
                "id": "flx3",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "10dp",
                "isModalContainer": false,
                "skin": "CopyslFbox0dd72fcc931dd44",
                "top": "10dp",
                "width": "98%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flx3.setDefaultUnit(voltmx.flex.DP);
            var flxJeweleryWatches = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "100%",
                "id": "flxJeweleryWatches",
                "isVisible": true,
                "layoutType": voltmx.flex.FLOW_VERTICAL,
                "left": "0",
                "isModalContainer": false,
                "skin": "sknlblRoundedCorner1pxffffffShadow5px",
                "top": "0",
                "width": "48%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxJeweleryWatches.setDefaultUnit(voltmx.flex.DP);
            var imgJewelleryWatches = new voltmx.ui.Image2({
                "centerX": "50%",
                "height": "50%",
                "id": "imgJewelleryWatches",
                "isVisible": true,
                "left": "0",
                "skin": "slImage",
                "src": "auccalitem5.png",
                "top": "20dp",
                "width": "50%"
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblJewellery = new voltmx.ui.Label({
                "bottom": "0dp",
                "centerX": "49.85%",
                "height": "30%",
                "id": "lblJewellery",
                "isVisible": true,
                "skin": "sknlblCPReg000000Font60px",
                "text": "JEWELLERY & WATCHES",
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
            flxJeweleryWatches.add(imgJewelleryWatches, lblJewellery);
            var flxAirConditioner = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "100%",
                "id": "flxAirConditioner",
                "isVisible": true,
                "layoutType": voltmx.flex.FLOW_VERTICAL,
                "isModalContainer": false,
                "right": 0,
                "skin": "sknlblRoundedCorner1pxffffffShadow5px",
                "top": "0",
                "width": "48%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxAirConditioner.setDefaultUnit(voltmx.flex.DP);
            var imgAirConditioner = new voltmx.ui.Image2({
                "centerX": "50%",
                "height": "50%",
                "id": "imgAirConditioner",
                "isVisible": true,
                "left": "0",
                "skin": "slImage",
                "src": "auccalitem6.png",
                "top": "20dp",
                "width": "50%"
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblGeneralItems = new voltmx.ui.Label({
                "bottom": "6dp",
                "centerX": "50%",
                "height": "20%",
                "id": "lblGeneralItems",
                "isVisible": true,
                "skin": "sknlblCPReg000000Font60px",
                "text": "GENERAL ITEMS",
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
            flxAirConditioner.add(imgAirConditioner, lblGeneralItems);
            flx3.add(flxJeweleryWatches, flxAirConditioner);
            flxCarDetailsBody.add(flx1, flx2, flx3);
            flxBody.add(flxHeading, flxCarDetailsBody);
            FlexScrollGroup0b6e90b2bf55e48.add(flxBody);
            var Footer2 = new com.hcl.voltmx.alwataneya1.Footer2({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "bottom": "0",
                "centerX": "50%",
                "height": "10%",
                "id": "Footer2",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0dp",
                "masterType": constants.MASTER_TYPE_DEFAULT,
                "isModalContainer": false,
                "skin": "sknFlxFooter",
                "width": "100%",
                "zIndex": 3,
                "appName": "AlwataneyaAuction",
                "overrides": {
                    "CopyimgProfile0e0b55f5e422d40": {
                        "src": "person.png"
                    },
                    "Footer2": {
                        "centerX": "50%",
                        "height": "10%",
                        "zIndex": 3
                    },
                    "flxProfile": {
                        "isVisible": false
                    },
                    "imgSellCar": {
                        "src": "group__2_.png"
                    }
                }
            }, {
                "paddingInPixel": false,
                "overrides": {}
            }, {
                "overrides": {}
            });
            var flxWhatsappcomponent = new com.hcl.voltmx.Whatsapp.flxWhatsappcomponent({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "bottom": "120dp",
                "height": "50dp",
                "id": "flxWhatsappcomponent",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "masterType": constants.MASTER_TYPE_DEFAULT,
                "isModalContainer": false,
                "right": "10dp",
                "skin": "sknFlx029051100borderadius",
                "width": "50dp",
                "zIndex": 4,
                "appName": "AlwataneyaAuction",
                "overrides": {
                    "flxWhatsappcomponent": {
                        "bottom": "120dp",
                        "left": "viz.val_cleared",
                        "right": "10dp",
                        "top": "viz.val_cleared",
                        "zIndex": 4
                    }
                }
            }, {
                "paddingInPixel": false,
                "overrides": {}
            }, {
                "overrides": {}
            });
            flxMain.add(flxHeader, FlexScrollGroup0b6e90b2bf55e48, Footer2, flxWhatsappcomponent);
            this.add(flxMain);
        };
        return [{
            "addWidgets": addWidgetsfrmAuctionCategories,
            "enabledForIdleTimeout": false,
            "id": "frmAuctionCategories",
            "layoutType": voltmx.flex.FREE_FORM,
            "needAppMenu": false,
            "skin": "slForm",
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
            "titleBarSkin": "slTitleBar",
            "windowSoftInputMode": constants.FORM_ADJUST_RESIZE
        }]
    }
});