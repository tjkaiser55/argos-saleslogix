/// <reference path="../../../../../argos-sdk/libraries/ext/ext-core-debug.js"/>
/// <reference path="../../../../../argos-sdk/libraries/sdata/sdata-client-debug"/>
/// <reference path="../../../../../argos-sdk/libraries/Simplate.js"/>
/// <reference path="../../../../../argos-sdk/src/View.js"/>
/// <reference path="../../../../../argos-sdk/src/List.js"/>

Ext.namespace("Mobile.SalesLogix.Ticket");

(function() {
    Mobile.SalesLogix.Ticket.List = Ext.extend(Sage.Platform.Mobile.List, {
        //Templates
        contentTemplate: new Simplate([
            '<h3>{%: $.Account ? $.Account.AccountName : "" %}</h3>',
            '<h4>{%: $.TicketNumber %}</h4>'
        ]),

        //Localization
        titleText: 'Tickets',

        //View Properties
        contextView: 'context_dialog',
        detailView: 'ticket_detail',
        icon: 'content/images/Ticket_List_3D_32x32.gif',
        id: 'ticket_list',
        insertView: 'ticket_edit',
        queryOrderBy: 'TicketNumber',
        querySelect: [
            'Account/AccountName',
            'TicketNumber'
        ],
        resourceKind: 'tickets',

        formatSearchQuery: function(query) {
            return String.format('TicketNumber like "%{0}%"', query);
        }
    });
})();