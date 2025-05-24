define({
  onNavigate: function () {
    this.vehicleDetails();
    this.view.btnProceedPayment.onClick = this.navigateToConfirmAndPayment.bind(this);
    this.view.flxBack.onClick = this.navigateToVehicleInspection.bind(this);
  },

  vehicleDetails: function () {
    var vehicleDetail = [
      {
        
        "imgDown"           : "iconamoon_arrow_down_2.png",
        "lblBasicInspection": 
        {
         "text": "Basic Inspection",
        "skin": "sknlbl231F20" 
        },
        "lblComprehensiveInspection": 
        {
         "text": "Comprehensive Inspection",
        "skin": "sknlbl231F20" 
        },
        "lblService": 
        {
        "text": "Select Service",
        "skin": "sknlbl9A9EA7"
        },
         "lblvehicleLotID": 
        {
        "text": "Vehicle Lot ID",
        "skin": "sknlbl9A9EA7"
        },
        "flxDropDown": 
        {
          "onClick": this.dropDownOnClick.bind(this)
        },
        "flxBasicInspection": 
        {
          "isVisible": false,
          "onClick"  : this.flxBasicInspectionOnClick.bind(this)
        },
        "flxComprehensiveInspection": 
        {
          "isVisible": false,
          "onClick"  : this.flxComprehensiveInspectionClick.bind(this)
        }
      }
    ];

    this.view.segService.setData(vehicleDetail);
  },

  dropDownOnClick: function () {
    var selectedRow = this.view.segService.selectedRowItems;

    if (!selectedRow || selectedRow.length === 0) {
      voltmx.print("No row is selected");
      return;
    }

    var rowIndex = this.view.segService.selectedRowIndex[1];
    var rowData = selectedRow[0];

    // Toggle visibility
    var isNowVisible = rowData.flxBasicInspection.isVisible;
    rowData.flxBasicInspection.isVisible = !isNowVisible;
    rowData.flxComprehensiveInspection.isVisible = !isNowVisible;

    // Rotate arrow icon
    var rotateTransform = voltmx.ui.makeAffineTransform();
    rotateTransform.rotate(isNowVisible ? 0 : 180);

    rowData.imgDown = {
      "src"      : "iconamoon_arrow_down_2.png",
      "transform": rotateTransform
    };

    this.view.segService.setDataAt(rowData, rowIndex);
  },

  handleInspectionSelection: function (selectedServiceLabel) {
    var rowIndex = this.view.segService.selectedRowIndex[1];
    var rowData = this.view.segService.selectedRowItems[0];

    rowData.lblService.text = selectedServiceLabel;
    rowData.lblService.skin = "sknlbl231F20";
    rowData.lblvehicleLotID.text = "#76821";
    rowData.lblvehicleLotID.skin = "sknlbl231F20";
    var isNowVisible = rowData.flxBasicInspection.isVisible;
    rowData.flxBasicInspection.isVisible = !isNowVisible;
    rowData.flxComprehensiveInspection.isVisible = !isNowVisible;

    var rotateTransform = voltmx.ui.makeAffineTransform();
    rotateTransform.rotate(isNowVisible ? 0 : 180);

    rowData.imgDown = {
      "src"      : "iconamoon_arrow_down_2.png",
      "transform": rotateTransform
    };

    this.view.segService.setDataAt(rowData, rowIndex);
  },

  flxBasicInspectionOnClick: function () {
    this.handleInspectionSelection("Basic Inspection");
  },

  flxComprehensiveInspectionClick: function () {
    this.handleInspectionSelection("Comprehensive Inspection");
  },
  navigateToConfirmAndPayment: function()
  {
    new voltmx.mvc.Navigation("frmConfirmAndPay").navigate();
  },
  navigateToVehicleInspection: function()
  {
    new voltmx.mvc.Navigation("frmVehicleInspection").navigate();
  }
});
