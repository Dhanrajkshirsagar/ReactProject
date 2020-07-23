import React from 'react';
import ReactExport from 'react-export-excel';

const ExcelFile = ReactExport.ExcelFile;
const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;
const ExcelColumn = ReactExport.ExcelFile.ExcelColumn;

class ExportData extends React.Component{
    
    render(){
        return(
            <div>
                <ExcelFile>
                   
                    <ExcelSheet data={this.props.filterStateData} name="Covid State Cases">
                        <ExcelColumn lable="Sr.No" value="index"></ExcelColumn>
                        <ExcelColumn lable="State name" value="state"/>
                        <ExcelColumn lable="Total Active" value="active"/>
                        <ExcelColumn lable="Total Recovered" value="recovered"/>
                        <ExcelColumn lable="Total Deaths" value="deaths"/>
                        <ExcelColumn lable="Total Confirmed" value="confirmed"/>
                    </ExcelSheet>
                </ExcelFile>
            </div>
        )
    }
}

export default ExportData;