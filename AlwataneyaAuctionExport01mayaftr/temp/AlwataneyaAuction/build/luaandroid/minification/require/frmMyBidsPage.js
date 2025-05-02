define("frmMyBidsPage", function() {
    return function(controller) {
        function addWidgetsfrmMyBidsPage() {
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
            var flxHeaderNew = new com.hcl.Alwataneya2.headernewfigma.flxHeaderNew({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "height": "8%",
                "id": "flxHeaderNew",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0dp",
                "masterType": constants.MASTER_TYPE_DEFAULT,
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1,
                "appName": "AlwataneyaAuction",
                "overrides": {}
            }, {
                "paddingInPixel": false,
                "overrides": {}
            }, {
                "overrides": {}
            });
            var flxScrollCarslist = new voltmx.ui.FlexScrollContainer({
                "allowHorizontalBounce": false,
                "allowVerticalBounce": true,
                "bounces": true,
                "clipBounds": false,
                "enableScrolling": true,
                "height": "82%",
                "horizontalScrollIndicator": true,
                "id": "flxScrollCarslist",
                "isVisible": true,
                "layoutType": voltmx.flex.FLOW_VERTICAL,
                "left": "0dp",
                "pagingEnabled": false,
                "scrollDirection": voltmx.flex.SCROLL_VERTICAL,
                "skin": "slFSbox",
                "top": "8%",
                "verticalScrollIndicator": true,
                "width": "100%",
                "zIndex": 3
            }, {
                "paddingInPixel": false
            }, {});
            flxScrollCarslist.setDefaultUnit(voltmx.flex.DP);
            var flxTypeOFBidSelection = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": false,
                "height": "10%",
                "id": "flxTypeOFBidSelection",
                "isVisible": true,
                "layoutType": voltmx.flex.FLOW_HORIZONTAL,
                "left": "0",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0",
                "width": "95%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxTypeOFBidSelection.setDefaultUnit(voltmx.flex.DP);
            var flxActiveBids = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "100%",
                "id": "flxActiveBids",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "2%",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0",
                "width": "30%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxActiveBids.setDefaultUnit(voltmx.flex.DP);
            var flxH1 = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "bottom": "15%",
                "clipBounds": false,
                "height": "10%",
                "id": "flxH1",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "sknFlxOrangePlainDark",
                "width": "100%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxH1.setDefaultUnit(voltmx.flex.DP);
            flxH1.add();
            var lblActiveBids = new voltmx.ui.Label({
                "centerX": "50%",
                "centerY": "50%",
                "id": "lblActiveBids",
                "isVisible": true,
                "skin": "sknLblCronosPro231f2018px49",
                "text": "Active Bids",
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
            flxActiveBids.add(flxH1, lblActiveBids);
            var flxWinningBids = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "100%",
                "id": "flxWinningBids",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "2%",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0",
                "width": "32%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxWinningBids.setDefaultUnit(voltmx.flex.DP);
            var flxH2 = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "bottom": "15%",
                "clipBounds": false,
                "height": "10%",
                "id": "flxH2",
                "isVisible": false,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "sknFlxOrangePlainDark",
                "width": "100%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxH2.setDefaultUnit(voltmx.flex.DP);
            flxH2.add();
            var lblWinningBids = new voltmx.ui.Label({
                "centerX": "50%",
                "centerY": "50%",
                "id": "lblWinningBids",
                "isVisible": true,
                "skin": "sknLblCronosPro8e8e8e18px49",
                "text": "Winning Bids",
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
            flxWinningBids.add(flxH2, lblWinningBids);
            var flxLostBids = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "100%",
                "id": "flxLostBids",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0",
                "width": "30%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxLostBids.setDefaultUnit(voltmx.flex.DP);
            var flxH3 = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "bottom": "15%",
                "clipBounds": false,
                "height": "10%",
                "id": "flxH3",
                "isVisible": false,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "sknFlxOrangePlainDark",
                "width": "100%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxH3.setDefaultUnit(voltmx.flex.DP);
            flxH3.add();
            var lblLostBids = new voltmx.ui.Label({
                "centerX": "50%",
                "centerY": "50%",
                "id": "lblLostBids",
                "isVisible": true,
                "skin": "sknLblCronosPro8e8e8e18px49",
                "text": "Lost Bids",
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
            flxLostBids.add(flxH3, lblLostBids);
            flxTypeOFBidSelection.add(flxActiveBids, flxWinningBids, flxLostBids);
            var flxActiveCarsList = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "88%",
                "id": "flxActiveCarsList",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "2%",
                "width": "100%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxActiveCarsList.setDefaultUnit(voltmx.flex.DP);
            var SegCarlist = new voltmx.ui.SegmentedUI2({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "data": [{
                    "Label0ba9f64edaddd49": "Label",
                    "btnBidnow": "BID NOW",
                    "imgCardata": "mask_group_1.png",
                    "imgfavicon": "imagedrag.png",
                    "imglocation": "imagedrag.png",
                    "imgrebid": "imagedrag.png",
                    "imgshare": "imagedrag.png",
                    "lblCarmodelname": "Ford Explorer",
                    "lblCurrentbid": "Current Bid",
                    "lblCurrentbidamount": "10,000",
                    "lblTotalbids": "Total Bids: 68",
                    "lblarea": "Mussafah Yard"
                }],
                "groupCells": false,
                "height": "100%",
                "id": "SegCarlist",
                "isVisible": true,
                "left": "0",
                "needPageIndicator": true,
                "pageOffDotImage": "pageoffdot.png",
                "pageOnDotImage": "pageondot.png",
                "retainSelection": false,
                "rowFocusSkin": "seg2Focus",
                "rowSkin": "seg2Normal",
                "rowTemplate": "flxBidlist",
                "scrollingEvents": {},
                "sectionHeaderSkin": "sliPhoneSegmentHeader",
                "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
                "separatorRequired": false,
                "showScrollbars": false,
                "top": "0",
                "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
                "widgetDataMap": {
                    "Label0ba9f64edaddd49": "Label0ba9f64edaddd49",
                    "btnBidnow": "btnBidnow",
                    "flxBidlist": "flxBidlist",
                    "flxCardata": "flxCardata",
                    "flxDetails": "flxDetails",
                    "flxImage": "flxImage",
                    "flxNameAndAddress": "flxNameAndAddress",
                    "flxRebid": "flxRebid",
                    "flxShare": "flxShare",
                    "flxfav": "flxfav",
                    "flxline": "flxline",
                    "imgCardata": "imgCardata",
                    "imgfavicon": "imgfavicon",
                    "imglocation": "imglocation",
                    "imgrebid": "imgrebid",
                    "imgshare": "imgshare",
                    "lblCarmodelname": "lblCarmodelname",
                    "lblCurrentbid": "lblCurrentbid",
                    "lblCurrentbidamount": "lblCurrentbidamount",
                    "lblTotalbids": "lblTotalbids",
                    "lblarea": "lblarea"
                },
                "width": "100%",
                "appName": "AlwataneyaAuction"
            }, {
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "dockSectionHeaders": false
            });
            flxActiveCarsList.add(SegCarlist);
            var flxWiningbidslist = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "clipBounds": false,
                "id": "flxWiningbidslist",
                "isVisible": false,
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
            flxWiningbidslist.setDefaultUnit(voltmx.flex.DP);
            var Segwinningbidslist = new voltmx.ui.SegmentedUI2({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "data": [{
                    "Button0e5f7819ec0104b": "PAY NOW",
                    "Image0f2a5efec3d9a49": "",
                    "Image0f64cf40eed744e": "",
                    "imgCardata": "",
                    "imgdoc": "",
                    "lblApproval": "APPROVAL STATUS",
                    "lblDocuments": "DOCUMENTS",
                    "lblPaymentstatus": "PAYMENT STATUS",
                    "lblStatusApproved": "APPROVED",
                    "lblWinningbid": "WINNING Bid",
                    "lblWinningmodelname": "Kia Carnival 2019",
                    "lbllocationanme": "Mussafah Yard",
                    "lbllot": "Lot#: 69952",
                    "lblpaymentstatusred": "UNPAID",
                    "lblrequestaccess": "REQUEST sERVICES",
                    "lblwinningbidamt": "10,000"
                }],
                "groupCells": false,
                "id": "Segwinningbidslist",
                "isVisible": true,
                "left": "0dp",
                "needPageIndicator": true,
                "pageOffDotImage": "pageoffdot.png",
                "pageOnDotImage": "pageondot.png",
                "retainSelection": false,
                "rowFocusSkin": "seg2Focus",
                "rowSkin": "seg2Normal",
                "rowTemplate": "flxwinningbids",
                "scrollingEvents": {},
                "sectionHeaderSkin": "sliPhoneSegmentHeader",
                "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
                "separatorRequired": false,
                "showScrollbars": false,
                "top": "0dp",
                "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
                "widgetDataMap": {
                    "Button0e5f7819ec0104b": "Button0e5f7819ec0104b",
                    "Image0f2a5efec3d9a49": "Image0f2a5efec3d9a49",
                    "Image0f64cf40eed744e": "Image0f64cf40eed744e",
                    "flxDocuments": "flxDocuments",
                    "flxImage": "flxImage",
                    "flxMain": "flxMain",
                    "flxRequestaccess": "flxRequestaccess",
                    "flxWinningdetails": "flxWinningdetails",
                    "flxline": "flxline",
                    "flxwinningbids": "flxwinningbids",
                    "imgCardata": "imgCardata",
                    "imgdoc": "imgdoc",
                    "lblApproval": "lblApproval",
                    "lblDocuments": "lblDocuments",
                    "lblPaymentstatus": "lblPaymentstatus",
                    "lblStatusApproved": "lblStatusApproved",
                    "lblWinningbid": "lblWinningbid",
                    "lblWinningmodelname": "lblWinningmodelname",
                    "lbllocationanme": "lbllocationanme",
                    "lbllot": "lbllot",
                    "lblpaymentstatusred": "lblpaymentstatusred",
                    "lblrequestaccess": "lblrequestaccess",
                    "lblwinningbidamt": "lblwinningbidamt"
                },
                "width": "100%",
                "appName": "AlwataneyaAuction"
            }, {
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxWiningbidslist.add(Segwinningbidslist);
            var flxlostbid = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "clipBounds": false,
                "id": "flxlostbid",
                "isVisible": false,
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
            flxlostbid.setDefaultUnit(voltmx.flex.DP);
            var seglostbid = new voltmx.ui.SegmentedUI2({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "data": [{
                    "Image0f64cf40eed744e": "",
                    "imglostbidcar": "",
                    "lblgotoauctions": "GO TO AUCTIONS",
                    "lbllocationname": "Mussafah Yard",
                    "lbllot": "Lot#: 69952",
                    "lblmanymore": "MANY MORE TO CHOOSE FROM",
                    "lblmodelnamecar": "Nissan Patrol 2019",
                    "lbltotalbidsize": "Total Bids: 68",
                    "lblyourbid": "YOUR BID",
                    "llblyourbidno": "10,000"
                }],
                "groupCells": false,
                "id": "seglostbid",
                "isVisible": true,
                "left": "0",
                "needPageIndicator": true,
                "pageOffDotImage": "pageoffdot.png",
                "pageOnDotImage": "pageondot.png",
                "retainSelection": false,
                "rowFocusSkin": "seg2Focus",
                "rowSkin": "seg2Normal",
                "rowTemplate": "flxlostbid",
                "scrollingEvents": {},
                "sectionHeaderSkin": "sliPhoneSegmentHeader",
                "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
                "separatorRequired": false,
                "separatorThickness": 0,
                "showScrollbars": false,
                "top": "0",
                "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
                "widgetDataMap": {
                    "Image0f64cf40eed744e": "Image0f64cf40eed744e",
                    "flxMain": "flxMain",
                    "flximage": "flximage",
                    "flxline": "flxline",
                    "flxlostbid": "flxlostbid",
                    "imglostbidcar": "imglostbidcar",
                    "lblgotoauctions": "lblgotoauctions",
                    "lbllocationname": "lbllocationname",
                    "lbllot": "lbllot",
                    "lblmanymore": "lblmanymore",
                    "lblmodelnamecar": "lblmodelnamecar",
                    "lbltotalbidsize": "lbltotalbidsize",
                    "lblyourbid": "lblyourbid",
                    "llblyourbidno": "llblyourbidno"
                },
                "width": "100%",
                "appName": "AlwataneyaAuction"
            }, {
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxlostbid.add(seglostbid);
            flxScrollCarslist.add(flxTypeOFBidSelection, flxActiveCarsList, flxWiningbidslist, flxlostbid);
            var Footer2 = new com.hcl.voltmx.alwataneya1.Footer2({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "bottom": "0",
                "height": "10%",
                "id": "Footer2",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0dp",
                "masterType": constants.MASTER_TYPE_DEFAULT,
                "isModalContainer": false,
                "skin": "sknFlxFooter",
                "width": "100%",
                "zIndex": 6,
                "appName": "AlwataneyaAuction",
                "overrides": {
                    "Footer2": {
                        "height": "10%",
                        "zIndex": 6
                    },
                    "flxHL1": {
                        "width": "100%"
                    }
                }
            }, {
                "paddingInPixel": false,
                "overrides": {}
            }, {
                "overrides": {}
            });
            flxMain.add(flxHeaderNew, flxScrollCarslist, Footer2);
            this.add(flxMain);
        };
        return [{
            "addWidgets": addWidgetsfrmMyBidsPage,
            "enabledForIdleTimeout": false,
            "id": "frmMyBidsPage",
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