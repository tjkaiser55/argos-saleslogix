﻿/// <reference path="../../../../ext/ext-core-debug.js"/>
/// <reference path="../../../../Simplate.js"/>
/// <reference path="../../../../sdata/SDataResourceCollectionRequest.js"/>
/// <reference path="../../../../sdata/SDataService.js"/>
/// <reference path="../../../../platform/View.js"/>
/// <reference path="../../../../platform/List.js"/>

Ext.namespace("Mobile.SalesLogix.Lead");

Mobile.SalesLogix.Lead.List = Ext.extend(Sage.Platform.Mobile.List, {
    titleText: 'Lead',
    fbartitleText: 'note',
    contentTemplate: new Simplate([
        '<a href="#lead_detail" target="_detail" m:key="{%= $key %}" m:descriptor="{%: $descriptor %}">',
        '<h3>{%= LeadNameLastFirst %}</h3>',
        '<h4>{%= $.Company %}</h4>',
        '</a>'
    ]),
    constructor: function(o) {
        Mobile.SalesLogix.Lead.List.superclass.constructor.call(this);

        Ext.apply(this, o, {
            id: 'lead_list',
            title: this.titleText,
            editor: 'lead_edit',
            contextDialog: 'context_dialog',
            resourceKind: 'leads',
            pageSize: 25,
            icon: 'content/images/Leads_24x24.gif'
        });
        
        Ext.apply(this.tools || {}, {
            fbar: [{
                name: 'new',
                title: 'new',
                cls: 'tool-note',
                icon: 'content/images/Note_32x32.gif',
                fn: this.navigateToInsert,
                scope: this
            },{
                name: 'test2',
                title: this.titleText,
                icon: 'content/images/Whats_New_3D_Files_32x32.gif',
                fn: function() { alert("two");},
                scope: this
            }]
        })
    },
    
    formatSearchQuery: function(query) {
        return String.format('(LeadNameLastFirst like "%{0}%")', query);
    },
    createRequest: function() {
        var request = Mobile.SalesLogix.Lead.List.superclass.createRequest.call(this);
        request
            .setResourceKind('leads')
            .setQueryArgs({
                'orderby': 'Company',
                'select': 'LeadNameLastFirst,Company'
            });

        return request;
    }
});
