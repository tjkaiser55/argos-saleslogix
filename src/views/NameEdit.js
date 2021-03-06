Ext.namespace("Mobile.SalesLogix");

Mobile.SalesLogix.NameEdit = Ext.extend(Sage.Platform.Mobile.Edit, {
    //Localization
    firstnameLabel: 'first',
    lastnameLabel: 'last',
    middlenameLabel: 'middle',
    prefixLabel: 'prefix',
    prefixTitleText: 'Name Prefix',
    suffixLabel: 'suffix',
    suffixTitleText: 'Name Suffix',

    //View Properties
    id: 'name_edit',

    constructor: function(o) {
        Mobile.SalesLogix.NameEdit.superclass.constructor.call(this);

        Ext.apply(this, o, {
            expose: false
        });

        this.layout = [
            {
                label: this.prefixLabel,
                name: 'Prefix',
                picklist: 'Name Prefix',
                requireSelection: true,
                title: this.prefixTitleText,
                type: 'picklist'
            },
            {
                name: 'FirstName',
                label: this.firstnameLabel,
                type: 'text'
            },
            {
                name: 'MiddleName',
                label: this.middlenameLabel,
                type: 'text'
            },
            {
                name: 'LastName',
                label: this.lastnameLabel,
                type: 'text'
            },
            {
                label: this.suffixLabel,
                name: 'Suffix',
                picklist: 'Name Suffix',
                requireSelection: true,
                title: this.suffixTitleText,
                type: 'picklist'
            }
        ];
    }
});