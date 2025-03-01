"use strict";
exports.__esModule = true;
exports.TaskList = void 0;
var react_1 = require("react");
var Paper_1 = require("@mui/material/Paper");
var material_1 = require("@mui/material");
var Helper_1 = require("@/utils/Helper");
var IconButton_1 = require("@mui/material/IconButton");
var helper = new Helper_1.Helper();
var TaskListHeaders = [
    {
        "ColumnName": 'Title',
        "DisplayName": 'Title',
        "IsVisible": true
    },
    {
        "ColumnName": "TaskCode",
        "DisplayName": "Code",
        "IsVisible": true
    },
    {
        "ColumnName": "StatusID",
        "DisplayName": "Status",
        "IsVisible": true
    },
    {
        "ColumnName": "AssignedUserID",
        "DisplayName": "Assignee",
        "IsVisible": true
    },
    {
        "ColumnName": "StartDate",
        "DisplayName": "Start Date",
        "IsVisible": true
    },
    {
        "ColumnName": "EndDate",
        "DisplayName": "End Date",
        "IsVisible": true
    },
    {
        "ColumnName": "CreatedBy",
        "DisplayName": "Created By",
        "IsVisible": true
    },
    {
        "ColumnName": "CreatedDate",
        "DisplayName": "Created Date",
        "IsVisible": true
    },
];
function TaskList(_a) {
    var _b, _c;
    var configs = _a.configs, data = _a.data, callbacks = _a.callbacks;
    var _d = react_1.useState(), statusData = _d[0], setStatusData = _d[1];
    var _e = react_1.useState(), assigneeData = _e[0], setAssigneeData = _e[1];
    react_1.useEffect(function () {
        var _a, _b;
        setStatusData((_a = data === null || data === void 0 ? void 0 : data.baseSetup) === null || _a === void 0 ? void 0 : _a.statusData);
        setAssigneeData((_b = data === null || data === void 0 ? void 0 : data.baseSetup) === null || _b === void 0 ? void 0 : _b.assigneeData);
    }, [configs, data, callbacks]);
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement("span", { style: { marginLeft: '15px', marginTop: '8px' } },
            react_1["default"].createElement("b", null, "File-TaskLikst.tsx")),
        react_1["default"].createElement("div", { style: { marginLeft: "15px", marginRight: "15px", marginBottom: '10px' } }, ((_b = data === null || data === void 0 ? void 0 : data.TaskListData) === null || _b === void 0 ? void 0 : _b.length) > 0
            ?
                react_1["default"].createElement(material_1.TableContainer, { component: Paper_1["default"], sx: { maxHeight: { xs: "70vh", sm: "70vh", md: "70vh", lg: "80vh", xl: "80vh" }, minHeight: 'fit-content', borderRadius: '15px', mt: 1 } },
                    react_1["default"].createElement(material_1.Table, { "data-testid": configs === null || configs === void 0 ? void 0 : configs.dataTestID, sx: { minWidth: 650 }, "aria-label": "sticky table", stickyHeader: true },
                        react_1["default"].createElement(material_1.TableHead, null,
                            react_1["default"].createElement(material_1.TableRow, null, TaskListHeaders === null || TaskListHeaders === void 0 ? void 0 :
                                TaskListHeaders.map(function (column, index) { return ((column === null || column === void 0 ? void 0 : column.IsVisible) && react_1["default"].createElement(material_1.TableCell, { key: index, sx: { background: '#1976d2', color: 'white' } },
                                    react_1["default"].createElement("b", null,
                                        " ",
                                        (column === null || column === void 0 ? void 0 : column.DisplayName)))); }),
                                react_1["default"].createElement(material_1.TableCell, { sx: { maxHeight: "75vh", minHeight: 'fit-content', background: '#1976d2', color: 'white' } },
                                    react_1["default"].createElement("b", null, "Edit")),
                                react_1["default"].createElement(material_1.TableCell, { sx: { maxHeight: "75vh", minHeight: 'fit-content', background: '#1976d2', color: 'white' } },
                                    react_1["default"].createElement("b", null, "Delete")))),
                        react_1["default"].createElement(material_1.TableBody, null, (_c = data === null || data === void 0 ? void 0 : data.TaskListData) === null || _c === void 0 ? void 0 : _c.map(function (data, index) {
                            var _a, _b;
                            return react_1["default"].createElement(material_1.TableRow, { key: index, sx: {
                                    '&:last-child td, &:last-child th': { border: 0 },
                                    '&:hover': {
                                        transform: 'scale(1.0)', boxShadow: '0 10px 20px rgba(0, 0, 0, 0.3)'
                                    }
                                } },
                                (TaskListHeaders === null || TaskListHeaders === void 0 ? void 0 : TaskListHeaders.find(function (data) { return (data === null || data === void 0 ? void 0 : data.ColumnName) === 'Title'; })) &&
                                    react_1["default"].createElement(material_1.TableCell, null, data === null || data === void 0 ? void 0 : data.Title),
                                (TaskListHeaders === null || TaskListHeaders === void 0 ? void 0 : TaskListHeaders.find(function (data) { return (data === null || data === void 0 ? void 0 : data.ColumnName) === 'TaskCode'; })) &&
                                    react_1["default"].createElement(material_1.TableCell, null, data === null || data === void 0 ? void 0 : data.TaskCode),
                                (TaskListHeaders === null || TaskListHeaders === void 0 ? void 0 : TaskListHeaders.find(function (data) { return (data === null || data === void 0 ? void 0 : data.ColumnName) === 'StatusID'; })) &&
                                    react_1["default"].createElement(material_1.TableCell, null, statusData && data.StatusID ? (react_1["default"].createElement(material_1.Chip, { label: (_a = statusData.find(function (status) { return status.StatusID === data.StatusID; })) === null || _a === void 0 ? void 0 : _a.StatusName, sx: { color: 'white', background: 'green' } })) : (react_1["default"].createElement(material_1.Chip, { label: "Unknown", color: "default" }))),
                                (TaskListHeaders === null || TaskListHeaders === void 0 ? void 0 : TaskListHeaders.find(function (data) { return (data === null || data === void 0 ? void 0 : data.ColumnName) === 'AssignedUserID'; })) &&
                                    react_1["default"].createElement(material_1.TableCell, null, assigneeData && data.AssignedUserID ? (_b = assigneeData.find(function (user) { return user.UserID === data.AssignedUserID; })) === null || _b === void 0 ? void 0 : _b.UserName : '-'),
                                (TaskListHeaders === null || TaskListHeaders === void 0 ? void 0 : TaskListHeaders.find(function (data) { return (data === null || data === void 0 ? void 0 : data.ColumnName) === 'StartDate'; })) &&
                                    react_1["default"].createElement(material_1.TableCell, null, helper.converttoDateFormat(data === null || data === void 0 ? void 0 : data.StartDate, "MM/DD/YYYY")),
                                (TaskListHeaders === null || TaskListHeaders === void 0 ? void 0 : TaskListHeaders.find(function (data) { return (data === null || data === void 0 ? void 0 : data.ColumnName) === 'EndDate'; })) &&
                                    react_1["default"].createElement(material_1.TableCell, null, helper.converttoDateFormat(data === null || data === void 0 ? void 0 : data.EndDate, "MM/DD/YYYY")),
                                (TaskListHeaders === null || TaskListHeaders === void 0 ? void 0 : TaskListHeaders.find(function (data) { return (data === null || data === void 0 ? void 0 : data.ColumnName) === 'CreatedBy'; })) &&
                                    react_1["default"].createElement(material_1.TableCell, null, data === null || data === void 0 ? void 0 : data.CreatedBy),
                                (TaskListHeaders === null || TaskListHeaders === void 0 ? void 0 : TaskListHeaders.find(function (data) { return (data === null || data === void 0 ? void 0 : data.ColumnName) === 'CreatedDate'; })) &&
                                    react_1["default"].createElement(material_1.TableCell, null, helper.converttoDateFormat(data === null || data === void 0 ? void 0 : data.CreatedDate, "MM/DD/YYYY")),
                                react_1["default"].createElement(material_1.TableCell, { "data-testid": (data === null || data === void 0 ? void 0 : data.TaskCode) + 'edit' },
                                    react_1["default"].createElement(IconButton_1["default"], { onClick: function () { return callbacks.handleTaskEdit(data); } },
                                        react_1["default"].createElement("span", { className: "material-icons", style: { fontSize: '16px', cursor: 'pointer', color: '#1976d2', fontWeight: 800 } }, "edit"))),
                                react_1["default"].createElement(material_1.TableCell, { "data-testid": (data === null || data === void 0 ? void 0 : data.TaskCode) + 'delete', sx: { display: 'flex', justifyContent: 'center', cursor: 'pointer' } },
                                    react_1["default"].createElement(IconButton_1["default"], { onClick: function () { return callbacks.handleTaskDelete(data); } },
                                        react_1["default"].createElement("span", { className: "material-icons", style: { fontSize: '16px', color: 'red', fontWeight: 800 } }, "delete"))));
                        }))))
            :
                react_1["default"].createElement("span", { style: { display: 'flex', justifyContent: 'center', paddingTop: '10%' } },
                    react_1["default"].createElement("b", null, "No Task Data has been Found...!")))));
}
exports.TaskList = TaskList;
