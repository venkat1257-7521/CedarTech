import MUIDataTable from "mui-datatables";
import React from "react";
import { createTheme, MuiThemeProvider } from "@material-ui/core/styles";

import {
  FormGroup,
  FormLabel,
  TextField,
  Checkbox,
  FormControlLabel,
} from "@material-ui/core";

const getTheme = () =>
  createTheme({
    overrides: {
      MuiTypography: {
        h6: {
          color: "#282828 !important",
          right: "30px",
          marginLeft: "-8px",
        },

        root: {
          margin: "0px",
        },
      },

      MuiPaper: {
        rounded: {
          borderRadius: "0px",
          width: "100%",
        },
      },
    },
  });

class DefectTable extends React.Component {
  state = {
    TimestampFilterChecked: false,
  };

  render() {
    const columns = [
      "Defect Type",
      "ProductionLine",
      {
        name: "Timestamp",
        options: {
          filter: true,
          filterType: "custom",
          customFilterListOptions: {
            render: (v) => {
              if (v[0] && v[1] && this.state.TimestampFilterChecked) {
                return [`Start Date: ${v[0]}`, `End Date: ${v[1]}`];
              } else if (v[0] && v[1] && !this.state.TimestampFilterChecked) {
                return `Start Date: ${v[0]}, End Date: ${v[1]}`;
              } else if (v[0]) {
                return `Start Date: ${v[0]}`;
              } else if (v[1]) {
                return `End Date: ${v[1]}`;
              }
              return [];
            },
            update: (filterList, filterPos, index) => {
              console.log(
                "customFilterListOnDelete: ",
                filterList,
                filterPos,
                index
              );
              if (filterPos === 0) {
                filterList[index].splice(filterPos, 1, "");
              } else if (filterPos === 1) {
                filterList[index].splice(filterPos, 1);
              } else if (filterPos === -1) {
                filterList[index] = [];
              }
              return filterList;
            },
          },
          filterOptions: {
            names: [],
            logic(Timestamp, filters) {
              if (filters[0] && filters[1]) {
                return Timestamp < filters[0] || Timestamp > filters[1];
              } else if (filters[0]) {
                return Timestamp < filters[0];
              } else if (filters[1]) {
                return Timestamp > filters[1];
              }
              return false;
            },
            display: (filterList, onChange, index, column) => (
              <div>
                <FormLabel>Timestamp</FormLabel>
                <FormGroup row>
                  <TextField
                    id="datetime-local"
                    label="Start Date"
                    type="datetime-local"
                    value="2018-06-12T19:30"
                    // defaultValue="2017-05-24"
                    value={filterList[index][0] || ""}
                    onChange={(event) => {
                      filterList[index][0] = event.target.value;
                      onChange(filterList[index], index, column);
                    }}
                    InputLabelProps={{
                      shrink: true,
                    }}
                    style={{ width: "70%" }}
                  />
                  <TextField
                    id="datetime-local"
                    label="End Date"
                    type="datetime-local"
                    format="DD-MM-YYYY"
                    defaultValue="2017-05-24T10:30"
                    value={filterList[index][1] || ""}
                    onChange={(event) => {
                      filterList[index][1] = event.target.value;
                      onChange(filterList[index], index, column);
                    }}
                    style={{ width: "70%", marginTop: "10px" }}
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={this.state.TimestampFilterChecked}
                        onChange={(event) =>
                          this.setState({
                            TimestampFilterChecked: event.target.checked,
                          })
                        }
                      />
                    }
                    label="Separate Values"
                    style={{ marginLeft: "0px" }}
                  />
                </FormGroup>
              </div>
            ),
          },
          print: false,
        },
      },
    ];
    var dt1 = new Date("2021-03-25,12:00:00Z").toISOString().split(".")[0].replace("T"," ");
    var dt2 = new Date("2021-04-25T15:30:00Z").toISOString().split(".")[0].replace("T"," ");
    var dt3 = new Date("2021-05-27T16:37:00Z").toISOString().split(".")[0].replace("T"," ");
    var dt4 = new Date("2021-05-18T11:21:54Z").toISOString().split(".")[0].replace("T"," ");

    const data = [
      ["DEFECT 1", 1, dt1],
      ["DEFECT 2", 2, dt2],
      ["DEFECT 3", 3, dt3],
      ["DEFECT 4", 4, dt4],
      ["DEFECT 1", 1, dt1],
      ["DEFECT 2", 2, dt2],
      ["DEFECT 3", 3, dt3],
      ["DEFECT 4", 4, dt4],
      ["DEFECT 1", 1, dt1],
      ["DEFECT 2", 2, dt2],
      ["DEFECT 3", 3, dt3],
      ["DEFECT 4", 4, dt4],
      ["DEFECT 1", 1, dt1],
      ["DEFECT 2", 2, dt2],
      ["DEFECT 3", 3, dt3],
      ["DEFECT 4", 4, dt4],
      ["DEFECT 1", 1, dt1],
      ["DEFECT 2", 2, dt2],
      ["DEFECT 3", 3, dt3],
      ["DEFECT 4", 4, dt4],
    ];

    const options = {
      filter: true,
      filterType: "checkbox",
      responsive: "standard",
      selectableRows: false,
    };

    return (
      <MuiThemeProvider theme={getTheme()}>
        <MUIDataTable
          title={"Filter"}
          data={data}
          columns={columns}
          options={options}
        />
      </MuiThemeProvider>
    );
  }
}

export default DefectTable;
