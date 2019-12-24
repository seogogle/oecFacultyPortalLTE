import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConstantService {

  constructor() { }


  // ssh -i /var/www/html/pwnarnkeypair.pem ubuntu@18.218.127.149

  public APIBaseURL = 'http://localhost/commission-portal/index.php/api/'
  //public APIBaseURL = 'http://18.218.127.149/commission-portal/api/'

  public APIConfig = {
    //in auth class
    LOGIN: 'auth/login',
    FORGET: 'auth/forget',
    GETSETTINGS: 'auth/settings',
    UPDATESETTINGS: 'auth/settings/',
    UPDATEPROFILE: 'auth/profile',

    //testing function for open new window
    LOGINWITHUSERNAME: 'auth/login_by_username',

    //in member class
    USERS: 'members/users',
    ADDUSER: 'members/users',
    GETUSER: 'members/user/',
    DELETEUSER: 'members/user/',
    UPDATEUSER: 'members/user/',
    GETSALESPERSONS: 'members/salesPersonsList/',

    //in api class
    ADDTIER: 'api/tiers',
    TIERSLIST: 'api/tiers',
    DELETETIER: 'api/tier/',
    ROLELIST: 'api/roles',
    SALESMANAGERLIST: 'api/salesmanagers',
    FINANCEMANGERLIST: 'api/financemangers',
    ADDRULE: 'api/rules',
    RULESLIST: 'api/rules',
    DELETERULE: 'api/rule/',
    //DEALSLISTBYUSER: 'deal/deals/',
    DEALSLISTBYUSER: 'deal/deals_list/',
    ISUNIQEMAIL: 'api/isEmailRegisterd',

    //in deal class
    ADDDEAL: 'deal/deals/',
    ISUNIQIDMS: 'deal/isIDMSRegisterd',
    TOTALSALES: 'deal/count_all/',
    TOTALDEALS_CASH: 'deal/count_all_type/C',
    TOTALDEALS_WHOLESALE: 'deal/count_all_type/D',
    TOTALDEALS_INHOUSE: 'deal/count_all_type/F',
    COUNTSALESBYSALESMAN: 'deal/countDealsBySalesman/',
    COUNTSALESBYSALESTEAM: 'deal/count_deals_by_salesteam',
    GETTIERFORSALESMAN: 'deal/getTierForSalesman/',
    CALCULATECOMMISSION: 'deal/calculate_commission/', //params tier and deal id
    SALESMANOFMONTH: 'deal/salesman_of_month/',
    TOTALSALEOFMONTH: 'deal/count_month_sale/',
    GETDEALDATA: 'deal/deal/',
    UPDATEDEAL: 'deal/deal',
    ADDCOMMENTS: 'deal/comments/',
    GETCOMMENTS: 'deal/comments/',
    GETRECENTCOMMENT: 'deal/get_recent_comment/'

  };

  public tokenConfig = {
    AUTH_TOKEN: 'AUTHTOKEN',
    USER_INFO: 'USERINFO',
    USER_ROLES: 'userRoles',
    VERIFY_DATA: 'VERIFY'
  };

  public dashboardConfig = {
    DASHBOARD_URL: 'DASHBOARD'
  };

  public errMsgConfig = {
    UNKNOWN_ERROR: 'Some Error Occured.'
  };
}
