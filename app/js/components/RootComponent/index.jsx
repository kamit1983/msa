import React from 'react';
import $ from "jquery";
import FilterComponent from "./../FilterComponent";
import DetailComponent from "./../DetailComponent";
import LinkComponent from "./LinkComponent"
import Griddle from "griddle-react";
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import Collapse, { Panel } from 'rc-collapse';

class RootComponent extends React.Component
{
  constructor(props){
    super(props);
    this.state = {
      data: [],
      activeKey:["1"],
      externalCurrentPage: 0
    }
  }
  openModal() {

    this.setState({modalIsOpen: true});
  }
  afterOpenModal() {
    // references are now sync'd and can be accessed.
  }
  closeModal() {
    this.setState({modalIsOpen: false});
  }
  get() {
    this.serverRequest = $.get('app/data/master.json', function (result) {
     var data = result;
     this.setState({
       data: data,
       modalIsOpen: false
     });
   }.bind(this));
   this.setState({activeKey:["2"]});
  }
  setPage(page){
    this.setState({externalCurrentPage: page})
  }
  externalChangeSort(){

  }
  externalSetFilter(){

  }
  externalSetPageSize(){

  }
  onChange(activeKey) {
    this.setState({
      activeKey: activeKey
    });
  }
  editRow(e){
    this.setState({modalIsOpen: true, selectedUpc: e.props.data.upc });
  }
  render(){
    var filterProps = [
      {key: 0, name:"upc", label: "UPC", type:"input"},
      {key: 1, name:"upcDesc", label: "UPC Description", type:"input"},
      {key: 2, name:"iUUID", label: "iUUID", type:"input"},
      {key: 3, name:"category", label: "Category", type:"input"},
      {key: 4, name:"recommemded", label: "Recommemded", type:"select"},
      {key: 5, name:"recommendedUom", label: "Recommemded UOM", type:"input"},
      {key: 6, name:"recommemmdedStartDate", label: "Recommemded Date on or after", type:"date",before:"recommemdedEndDate"},
      {key: 7, name:"recommemmdedEndDate", label: "Recommemded Date on or before", type:"date",after: "recommemdedStartDate"},
      {key: 8, name:"validated", label: "Validated", type:"select"},
      {key: 9, name:"validatedUom", label: "Validated UOM", type:"input"},
      {key: 10, name:"validatedStartDate", label: "Validated Date on or after", type:"date", before: "validatedEndDate"},
      {key: 11, name:"validatedEndDate", label: "validated Date on or before", type:"date", after: "validatedStartDate"},
      {key: 12, name:"validatedBy", label: "Validated By", type:"input"},
      {key: 13, name:"validatedBy", label: "Validated By", type:"button"}

    ];
    var detailProps = [
      {key: 0, name: "validatedUom", label: "Validated UOM", type: "input"},
      {key: 1, name: "upc", label: "UPC", type: "label"},
      {key: 2, name: "upcDescription", label: "UPC Description", type: "label"},
      {key: 3, name: "iuuid", label: "IUUID", type: "label"},
      {key: 4, name: "category", label: "Category", type: "label"},
      {key: 5, name: "subCategory", label: "Sub Category", type: "label"},
      {key: 6, name: "manufacturer", label: "Manufacturer", type: "label"},
      {key: 7, name: "brandFamilyDesc", label: "Brand Family Desc", type: "label"},
      {key: 8, name: "brandDesc", label: "Brand Description", type: "label"},
      {key: 9, name: "packageTypeDesc", label: "Package Type Description", type: "label"},
      {key: 10, name: "nacsCategoryCode", label: "Nacs Category Code", type: "label"},
      {key: 11, name: "nacsCategory", label: "Nacs Category", type: "label"},
      {key: 12, name: "nacsSubCategory", label: "Nacs Sub Category", type: "label"},
      {key: 13, name: "nacsSubCategoryCode", label: "Nacs Sub Category Code", type: "label"},
      {key: 14, name: "masterBrandId", label: "Master Brand Id", type: "label"},
      {key: 15, name: "brandTypeCode", label: "Brand Type Code", type: "label"},
      {key: 16, name: "recommemdedUom", label: "Recommemded Uom", type: "label"},
      {key: 17, name: "recommemded", label: "Recommemded", type: "label"},
      {key: 18, name: "recommendedOn", label: "Recommended On", type: "label"},
      {key: 19, name: "validated", label: "Validated", type: "label"},
      {key: 20, name: "validatedOn", label: "Validated On", type: "label"},
      {key: 21, name: "validatedBy", label: "Validated By", type: "label"}
    ];
    var columns = ["upc", "upcDescription", "recommendedUom", "validatedUom", "cantegory", "manufacturer"];
    var columnMeta = [{
                      "columnName": "upc",
                      "customComponent": LinkComponent
                    }];

    const customStyles = {
                          content : {
                            top                   : '50%',
                            left                  : '50%',
                            right                 : 'auto',
                            bottom                : 'auto',
                            marginRight           : '-50%',
                            transform             : 'translate(-50%, -50%)',
                            padding               : '0px',
                            border                : "none"
                          }
                        };
    return  <div className="container-fluid">
            <div class="page-header">
              <h3>Data Cleansing Tool <small>MSA</small></h3>
            </div>
            <div className="row col-md-10 col-md-offset-1">
            <Collapse
                  accordion={true}
                  activeKey={this.state.activeKey}
                  onChange={this.onChange.bind(this)}>
              <Panel header="Search Section(Filter Page)" key="1">
                <FilterComponent filterProperty={filterProps} get={this.get.bind(this)}></FilterComponent>
              </Panel>
              <Panel header="Search Results(List Page)" key="2">
                <Griddle results={this.state.data}
                columns={columns}
                columnMetadata={columnMeta}
                resultsPerPage={10}
                settingsText="Settings"
                showSettings={true}
                externalSortColumn="upc"
                useExternal={true}
                externalChangeSort={this.externalChangeSort.bind(this)}
                externalSetFilter={this.externalSetFilter.bind(this)}
                externalSetPageSize={this.externalSetPageSize.bind(this)}
                externalSetPage={this.setPage.bind(this)}
                externalCurrentPage={this.state.externalCurrentPage}
                externalMaxPage={200}
                onRowClick={this.editRow.bind(this)} />
              </Panel>
            </Collapse>
              </div>
              <Modal
                isOpen={this.state.modalIsOpen}
                onAfterOpen={this.afterOpenModal}
                onRequestClose={this.closeModal}
                style={customStyles} >
                <DetailComponent detailProps={detailProps}
                  close={this.closeModal.bind(this)}
                  upc={this.state.selectedUpc}
                ></DetailComponent>
              </Modal>
              </div>


  }
}

export default RootComponent;
