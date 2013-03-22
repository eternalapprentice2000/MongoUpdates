//EDIT ITEMS BELOW

var FieldMetadataIdToUpdate 	= '300305';
var englishLabel 				= 'First and Last Name';
var spanish_mexLabel 			= 'Nombre de usuario';
var spanish_peruLabel	 		= 'Nombre de usuario';
var turkishLabel 				= 'Yarısma Kullanıcı Adı';

//Leave everything else below alone

use TextServiceContest
var DataContainersToUpdate = [];

var host = db.hostInfo().system.hostname;

switch(host.toLowerCase()){
// DEV
	case "webdev2":
	case "webadmin":
	case "appserverdev":
		DataContainersToUpdate = [
			"1d65555a-7a96-46e6-8347-31e378af6a77",
			"2ca8d2b3-703e-403a-bc79-63878eb5d823",
			"3412799c-8438-4cf9-b0f0-5bd07a9661c0",
			"4533a6b5-0a20-4bbf-b93d-a3f793da6965",
			"63041cdb-9ff4-46e6-a5ae-19fcf578e97d",
			"695f3068-85e0-46db-a091-6af44210df1f",
			"7ccd19b7-14b5-4e4e-8e74-06dd234ec5f1",
			"8e40023b-60b3-433a-b63c-aab283ee32a1",
			"90943854-5ef5-4e49-877b-8acadd0c1580",
			"a89b9b85-0fbc-4dab-9dc5-3ad4f0f0fe6d",
			"b96f3b70-7c7b-4f10-a7f8-a8f102ee37c7",
			"c2c9284c-6cf8-41db-9726-5731a5559565",
			"dec78382-9a21-4300-98f9-d5876bec8e1f"
		];
    break;
// QA
    case "webadminqa":
    case "webclientqa":
    case "websurvey":
		DataContainersToUpdate = [
			"1d65555a-7a96-46e6-8347-31e378af6a77",
			"639bf2cb-89c4-42c8-97bc-06d95d925faa",
			"7ccd19b7-14b5-4e4e-8e74-06dd234ec5f1",
			"90943854-5ef5-4e49-877b-8acadd0c1580",
			"98569658-1c1d-445c-9571-6810951d0b8e",
			"c2c9284c-6cf8-41db-9726-5731a5559565",
			"ed6a8758-b1c2-4154-a147-762d6cd48c3d",
			"ff039cda-aa59-4253-9825-0f03da2ec149"
		];
    break;

// Staging
 	case "webstage1":
    case "webstage2":
    case "stageclient02":
		DataContainersToUpdate = [
			"1d65555a-7a96-46e6-8347-31e378af6a77",
			"33e989ce-b15b-4176-b5a5-812eef32b276",
			"3b4ab2ba-42d4-4657-b2bc-2c430d07ec37",
			"4837d995-225b-4b6e-8d54-1b1ebefc3c5a",
			"5e8f3d03-c5cf-4456-bb21-001e99eb1a16",
			"7ccd19b7-14b5-4e4e-8e74-06dd234ec5f1",
			"90943854-5ef5-4e49-877b-8acadd0c1580",
			"c2c9284c-6cf8-41db-9726-5731a5559565"
		];
    break;

// Production
	case "triatlwweb05":
    case "triatlwweb06":
    case "triatlwweb07":
		DataContainersToUpdate = [
			"1d65555a-7a96-46e6-8347-31e378af6a77",
			"51018859-75b5-4355-ac24-bda56cdc95a9",
			"6c1a87a7-a499-4905-88aa-ae6b8d864098",
			"7ab6bb1f-2af4-4d6b-9fb7-f079f57e9f20",
			"7ccd19b7-14b5-4e4e-8e74-06dd234ec5f1",
			"90943854-5ef5-4e49-877b-8acadd0c1580",
			"a981d43e-aa41-4d89-9a62-855bc1f5e2c1",
			"b3b6beb3-ca46-4676-9ba5-f0dd29121f9c",
			"bad998fc-b7d2-430b-bcd7-f27188df5d7c",
			"c2c9284c-6cf8-41db-9726-5731a5559565",
			"d50eb3c1-c075-4a19-b2a0-b787a1753b97",
			"df0460fd-699e-405f-8ed2-9b1003159103"	
		];
    break;

}

for(var d in DataContainersToUpdate){
	var dataContainer = DataContainersToUpdate[d];

	print("Updating " + dataContainer + " FieldMetadataId: " + FieldMetadataIdToUpdate + " -> " + englishLabel);
	db.DataContainers.update({"DataContainerID" : dataContainer, "LanguageCode": "en-us", 	"DataFields.DataFieldID": FieldMetadataIdToUpdate}, {$set: {"DataFields.$.LabelText": englishLabel, "DataFields.$.LegacyInfo.LongLabelText" : englishLabel}}, {"multi" : true});
	db.DataContainers.update({"DataContainerID" : dataContainer, "LanguageCode": "es-mx", 	"DataFields.DataFieldID": FieldMetadataIdToUpdate}, {$set: {"DataFields.$.LabelText": spanish_mexLabel, "DataFields.$.LegacyInfo.LongLabelText" : spanish_mexLabel}}, {"multi" : true});
	db.DataContainers.update({"DataContainerID" : dataContainer, "LanguageCode": "es-pe", 	"DataFields.DataFieldID": FieldMetadataIdToUpdate}, {$set: {"DataFields.$.LabelText": spanish_peruLabel, "DataFields.$.LegacyInfo.LongLabelText" : spanish_peruLabel}}, {"multi" : true});
	db.DataContainers.update({"DataContainerID" : dataContainer, "LanguageCode": "tr", 		"DataFields.DataFieldID": FieldMetadataIdToUpdate}, {$set: {"DataFields.$.LabelText": turkishLabel, "DataFields.$.LegacyInfo.LongLabelText" : turkishLabel}}, {"multi" : true});
}
