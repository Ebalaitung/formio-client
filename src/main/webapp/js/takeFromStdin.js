const fs = require('fs');
const path = require('path');

const CUSTOM_COMPONENTS_FOLDER_NAME = 'custom-components';

module.exports = function takeFromStdin() {
    const [form, submission, pathToWorkspace] = ["%1$s", "%2$s", '%3$s'];
    // const form = "{\"owner\":\"5d516f44f65bfd36391f2c91\",\"components\":[{\"components\":[{\"template\":\"<span>{{ item.label }}</span>\",\"refreshOn\":\"\",\"authenticate\":false,\"data\":{\"headers\":[{\"value\":\"\",\"key\":\"\"}],\"resource\":\"\",\"values\":[{\"label\":\"John Price\",\"value\":\"1234567\"},{\"label\":\"Jane White\",\"value\":\"7543324\"},{\"label\":\"Steve Smith\",\"value\":\"5635654\"}],\"custom\":\"\",\"json\":\"\",\"url\":\"\"},\"hidden\":false,\"conditional\":{\"show\":\"\",\"eq\":\"\",\"when\":null},\"defaultValue\":\"\",\"labelWidth\":30,\"type\":\"select\",\"valueProperty\":\"\",\"protected\":false,\"labelPosition\":\"left-left\",\"placeholder\":\"\",\"lockKey\":true,\"persistent\":true,\"key\":\"patientId\",\"dataSrc\":\"values\",\"validate\":{\"custom\":\"valid = input.length === 7 && /^\\\\d{7}$/.test(input)\",\"required\":false},\"multiple\":false,\"labelMargin\":3,\"tableView\":true,\"clearOnHide\":true,\"label\":\"Chart number\",\"autofocus\":false,\"tags\":[],\"filter\":\"\",\"input\":true,\"unique\":false,\"properties\":{}},{\"template\":\"<span>{{ item.label }}</span>\",\"refreshOn\":\"\",\"authenticate\":false,\"data\":{\"resource\":\"\",\"values\":[{\"label\":\"Laboratory report\",\"value\":\"Laboratory report\"},{\"label\":\"Thyroid ultrasound\",\"value\":\"Thyroid ultrasound\"},{\"label\":\"Thyroid biopsy\",\"value\":\"Thyroid biopsy\"},{\"label\":\"Thyroid surgery\",\"value\":\"Thyroid surgery\"},{\"label\":\"Consultation\",\"value\":\"Consultation\"},{\"label\":\"Other diagnostic report\",\"value\":\"Other diagnostic report\"}],\"custom\":\"\",\"json\":\"\",\"url\":\"\"},\"hidden\":false,\"conditional\":{\"show\":\"\",\"eq\":\"\",\"when\":null},\"defaultValue\":\"\",\"type\":\"select\",\"valueProperty\":\"\",\"protected\":false,\"labelPosition\":\"top\",\"placeholder\":\"Select evaluation type\",\"lockKey\":true,\"persistent\":true,\"key\":\"evaluationType\",\"dataSrc\":\"values\",\"validate\":{\"required\":true},\"hideLabel\":true,\"multiple\":false,\"tableView\":true,\"clearOnHide\":true,\"label\":\"Evaluation type\",\"autofocus\":false,\"tags\":[],\"filter\":\"\",\"input\":true,\"unique\":false,\"properties\":{}},{\"hidden\":false,\"conditional\":{\"show\":\"true\",\"eq\":\"Other diagnostic report\",\"when\":\"evaluationType\"},\"prefix\":\"\",\"defaultValue\":\"\",\"suffix\":\"\",\"type\":\"textfield\",\"protected\":false,\"labelPosition\":\"top\",\"inputType\":\"text\",\"placeholder\":\"Evaluation name\",\"lockKey\":true,\"persistent\":true,\"key\":\"evaluationTypeOther\",\"validate\":{\"minLength\":1,\"custom\":\"valid = (input.length > 1) || (input.length == 1 && !/\\\\s/.test(input));\",\"customPrivate\":false,\"pattern\":\"\",\"customMessage\":\"Please enter correct value\",\"required\":false,\"maxLength\":160},\"hideLabel\":true,\"multiple\":false,\"tableView\":true,\"clearOnHide\":true,\"label\":\"Text\",\"autofocus\":false,\"inputMask\":\"\",\"inputFormat\":\"plain\",\"tags\":[],\"input\":true,\"spellcheck\":true,\"unique\":false,\"properties\":{}},{\"fileMinSize\":\"0KB\",\"hidden\":false,\"conditional\":{\"show\":\"\",\"eq\":\"\",\"when\":null},\"defaultValue\":\"\",\"tooltip\":\"Drop a file here or import from your device\",\"labelWidth\":30,\"customError\":\"File extension does not match the pattern image/*, application/pdf\",\"storage\":\"base64\",\"type\":\"file\",\"protected\":false,\"fileMaxSize\":\"1GB\",\"labelPosition\":\"top\",\"imageSize\":\"200\",\"placeholder\":\"\",\"lockKey\":true,\"persistent\":true,\"key\":\"requisitionFile\",\"validate\":{\"customMessage\":\"You can only upload files in formats pdf, png, jpg, jpeg, bmp, tif, doc, docx\"},\"hideLabel\":true,\"image\":false,\"multiple\":false,\"labelMargin\":3,\"tableView\":true,\"clearOnHide\":true,\"label\":\"Requisition\",\"autofocus\":false,\"tags\":[],\"input\":true,\"filePattern\":\".pdf,.png,.jpg,.jpeg,.bmp,.tif,.doc,.docx\",\"properties\":{}},{\"hidden\":false,\"conditional\":{\"show\":\"\",\"eq\":\"\",\"when\":null},\"prefix\":\"\",\"defaultValue\":\"\",\"suffix\":\"\",\"type\":\"textfield\",\"protected\":false,\"labelPosition\":\"top\",\"inputType\":\"text\",\"placeholder\":\"Comment (optional, hidden for patients)\",\"lockKey\":true,\"persistent\":true,\"key\":\"requisitionComment\",\"validate\":{\"minLength\":\"\",\"custom\":\"\",\"customPrivate\":false,\"pattern\":\"\",\"required\":false,\"maxLength\":160},\"hideLabel\":true,\"multiple\":false,\"tableView\":true,\"clearOnHide\":true,\"label\":\"Comment\",\"autofocus\":false,\"inputMask\":\"\",\"inputFormat\":\"plain\",\"tags\":[],\"input\":true,\"spellcheck\":true,\"unique\":false,\"properties\":{}},{\"template\":\"<span>{{ item.label }}</span>\",\"refreshOn\":\"\",\"authenticate\":false,\"data\":{\"resource\":\"\",\"values\":[{\"label\":\"No kit\",\"value\":\"No kit\"},{\"label\":\"TSH\",\"value\":\"TSH\"},{\"label\":\"TSH + free T4\",\"value\":\"TSH + free T4\"},{\"label\":\"TSH + free T4 + TPO antibodies\",\"value\":\"TSH + free T4 + TPO antibodies\"},{\"label\":\"TSH + TPO antibodies\",\"value\":\"TSH + TPO antibodies\"},{\"label\":\"TSH + free T4 + free T3\",\"value\":\"TSH + free T4 + free T3\"},{\"label\":\"TSH + free T4 + free T3 + TPO antibodies\",\"value\":\"TSH + free T4 + free T3 + TPO antibodies\"}],\"custom\":\"\",\"json\":\"\",\"url\":\"\"},\"hidden\":false,\"conditional\":{\"show\":\"true\",\"eq\":\"Laboratory report\",\"when\":\"evaluationType\"},\"defaultValue\":\"\",\"type\":\"select\",\"valueProperty\":\"\",\"protected\":false,\"labelPosition\":\"top\",\"placeholder\":\"Select home test kit\",\"lockKey\":true,\"persistent\":true,\"key\":\"homeTestKit\",\"dataSrc\":\"values\",\"validate\":{\"required\":true},\"hideLabel\":true,\"multiple\":false,\"tableView\":true,\"clearOnHide\":true,\"label\":\"Home test kit\",\"autofocus\":false,\"tags\":[],\"filter\":\"\",\"input\":true,\"unique\":false,\"properties\":{}}],\"conditional\":{\"show\":\"\",\"eq\":\"\",\"when\":null},\"tree\":true,\"tableView\":true,\"clearOnHide\":true,\"label\":\"container\",\"type\":\"container\",\"tags\":[],\"input\":true,\"protected\":false,\"labelPosition\":\"top\",\"lockKey\":true,\"persistent\":true,\"key\":\"evaluation\",\"properties\":{},\"hideLabel\":true},{\"rightIcon\":\"\",\"conditional\":{\"show\":\"\",\"eq\":\"\",\"when\":null},\"leftIcon\":\"\",\"tableView\":false,\"label\":\"Request\",\"autofocus\":false,\"type\":\"button\",\"disableOnInvalid\":false,\"tags\":[],\"input\":true,\"size\":\"md\",\"action\":\"submit\",\"block\":false,\"theme\":\"primary\",\"key\":\"submit\",\"properties\":{}}],\"access\":[{\"roles\":[\"5d0a115b237bea3880731559\"],\"type\":\"read_all\"}],\"created\":\"2019-09-05T13:04:49.027Z\",\"display\":\"form\",\"type\":\"form\",\"title\":\"Evaluation request\",\"machineName\":\"evaluation-request\",\"tags\":[\"common\",\"pharma\"],\"path\":\"forms/evaluation-request\",\"submissionAccess\":[{\"roles\":[\"5d0a115b237bea3880731559\"],\"type\":\"create_own\"},{\"roles\":[\"5d0a115b237bea3880731559\"],\"type\":\"read_own\"},{\"roles\":[\"5d0a115b237bea3880731559\"],\"type\":\"update_own\"},{\"roles\":[\"5d0a115b237bea3880731559\"],\"type\":\"delete_own\"}],\"name\":\"evaluation-request\",\"modified\":\"2019-11-14T14:10:14.580Z\",\"_id\":\"5dcd591f258cbe0b6870a876\",\"data\":{}}";
    // const submission = "{\"data\":{\"evaluation\":{\"evaluationType\":\"Laboratory report\",\"requisitionFile\":[],\"requisitionComment\":\"1\",\"patientId\":\"1234567\",\"homeTestKit\":\"TSH\",\"evaluationTypeOther\":\"\"},\"submit\":true,\"state\":\"submitted\"}}";
    // const pathToWorkspace = 'C:\\Users\\dyakovenko\\Documents\\tmp2';
    const pathToCustomComponentsFolder = fs.existsSync(path.resolve(pathToWorkspace, CUSTOM_COMPONENTS_FOLDER_NAME)) ? path.resolve(pathToWorkspace, CUSTOM_COMPONENTS_FOLDER_NAME) : undefined;
    return [JSON.parse(form), JSON.parse(submission), pathToCustomComponentsFolder];
}
