interface ButtonState {
    [key: string]: any;
}


export const buttonStates: ButtonState = {
    btnStateCompanyGroup$: "",
    btnStateUsersGroup$: "",
    btnStateCompanies$: "",
    btnStateUsers$: "",
    btnStatePermissions$: "",
    btnStateAdministrator$: "",
    btnStatePlans$: "",
    btnStateCFOP$: "",
    btnStateNCM$: "",
    btnStateGENERO$: "",
    btnStateCEST$: "",
    btnStateCONTA_SPED$: "",
    btnStateSERVICOS$: "",
    btnStateGNRE$: "",
    btnStateCST_ICMS$: "",
    btnStateCSOSN$: "",
    btnStateCST_IPI$: "",
    btnStateCEL_IPI$: "",
    btnStateCST_PIS$: "",
    btnStateCST_COFINS$: "",
    btnStateCST_ISS$: "",
    btnStateCountry$: "",
    btnStateStates$: "",
    btnStateCities$: "",
};

export const MENU_CONFIG =
{
    CompanyGroup: {
        name: "Grupo de Empresas",
        route: "company-group",
        templateRoute: "CompanyGroup",
        btnState: "btnStateCompanyGroup$",
        serviceCode: 3,
        actionCode: "edit01"
    },
    UsersGroup: {
        name: "Grupo de usuários",
        route: "user-group",
        templateRoute: "UsersGroup",
        btnState: "btnStateUsersGroup$",
        serviceCode: 1,
        actionCode: "edit01"
    },
    Companies: {
        name: "Empresas",
        route: "company",
        templateRoute: "Companies",
        btnState: "btnStateCompanies$",
        serviceCode: 3,
        actionCode: "edit01"
    },
    Users: {
        name: "Usuários",
        route: "user",
        templateRoute: "Users",
        btnState: "btnStateUsers$",
        serviceCode: 1,
        actionCode: "edit01"
    },
    Permissions: {
        name: "Permissões",
        route: "permission",
        templateRoute: "Permissions",
        btnState: "btnStatePermissions$",
        serviceCode: 1,
        actionCode: "edit01"
    },
    Administrator: {
        name: "Administradores",
        route: "administrator",
        templateRoute: "Administrator",
        btnState: "btnStateAdministrator$",
        serviceCode: 5,
        actionCode: "edit01"
    },
    Plans: {
        name: "Planos",
        route: "monthly-plan",
        templateRoute: "Plans",
        btnState: "btnStatePlans$",
        serviceCode: 6,
        actionCode: "edit01"
    },
    CFOP: {
        name: "CFOP",
        route: "cfop",
        templateRoute: "CFOP",
        btnState: "btnStateCFOP$",
        serviceCode: 16,
        actionCode: "edit01"
    },
    NCM: {
        name: "NCM",
        route: "ncm",
        templateRoute: "NCM",
        btnState: "btnStateNCM$",
        serviceCode: 19,
        actionCode: "edit01"
    },
    GENERO: {
        name: "Gênero",
        route: "gender",
        templateRoute: "GENERO",
        btnState: "btnStateGENERO$",
        serviceCode: 17,
        actionCode: "edit01"
    },
    CEST: {
        name: "CEST",
        route: "cest",
        templateRoute: "CEST",
        btnState: "btnStateCEST$",
        serviceCode: 15,
        actionCode: "edit01"
    },
    CONTA_SPED: {
        name: "Conta SPED",
        route: "sped-account",
        templateRoute: "CONTA_SPED",
        btnState: "btnStateCONTA_SPED$",
        serviceCode: 14,
        actionCode: "edit01"
    },
    SERVICOS: {
        name: "Serviços",
        route: "service",
        templateRoute: "SERVICOS",
        btnState: "btnStateSERVICOS$",
        serviceCode: 20,
        actionCode: "edit01"
    },
    GNRE: {
        name: "GNRE",
        route: "gnre",
        templateRoute: "GNRE",
        btnState: "btnStateGNRE$",
        serviceCode: 18,
        actionCode: "edit01"
    },
    CST_ICMS: {
        name: "CST ICMS",
        route: "csticms",
        templateRoute: "CST_ICMS",
        btnState: "btnStateCST_ICMS$",
        serviceCode: 11,
        actionCode: "edit01"
    },
    CSOSN: {
        name: "CSOSN",
        route: "CSOSN",
        templateRoute: "CSOSN",
        btnState: "btnStateCSOSN$",
        serviceCode: 9,
        actionCode: "edit01"
    },
    CST_IPI: {
        name: "CST IPI",
        route: "cstipi",
        templateRoute: "CST_IPI",
        btnState: "btnStateCST_IPI$",
        serviceCode: 12,
        actionCode: "edit01"
    },
    CEL_IPI: {
        name: "CEL IPI",
        route: "celipi",
        templateRoute: "CEL_IPI",
        btnState: "btnStateCEL_IPI$",
        serviceCode: 8,
        actionCode: "edit01"
    },
    CST_PIS: {
        name: "CST PIS",
        route: "cstpis",
        templateRoute: "CST_PIS",
        btnState: "btnStateCST_PIS$",
        serviceCode: 7,
        actionCode: "edit01"
    },
    CST_COFINS: {
        name: "CST COFINS",
        route: "cst-cofins",
        templateRoute: "CST_COFINS",
        btnState: "btnStateCST_COFINS$",
        serviceCode: 10,
        actionCode: "edit01"
    },
    CST_ISS: {
        name: "CST ISS",
        route: "cst-iss",
        templateRoute: "CST_ISS",
        btnState: "btnStateCST_ISS$",
        serviceCode: 13,
        actionCode: "edit01"
    },
    Country: {
        name: "Países",
        route: "country",
        templateRoute: "Country",
        btnState: "btnStateCountry$",
        serviceCode: 2,
        actionCode: "edit01"
    },
    States: {
        name: "Estados",
        route: "state",
        templateRoute: "States",
        btnState: "btnStateStates$",
        serviceCode: 2,
        actionCode: "edit01"
    },
    Cities: {
        name: "Cidades",
        route: "city",
        templateRoute: "Cities",
        btnState: "btnStateCities$",
        serviceCode: 2,
        actionCode: "edit01"
    }
}

