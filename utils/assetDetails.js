export const assetDetails = [
    {
        title: "01MP02C",
        jargon: ['p2c', 'mp2c', 'ebara p2', 'new p2', 'carbonate pump'],
        desc: "'C' HP Carbonate Pump",
        site: "Urea Plant",
        area: "Synthesis",
        drawings: [
            'https://ui.sharepoint.com/:b:/r/sites/tno/DraftingAndDocumentControl/TNOMR/UREA%20-%20Urea/PRO%20-%20Process/PID%20-%20Piping%20and%20Instrumentation%20Diagram/01-GD-A-87505.pdf',
            "https://ui.sharepoint.com/sites/tno/DraftingAndDocumentControl/TNOMR/UREA%20-%20Urea/PRO%20-%20Process/PID%20-%20Piping%20and%20Instrumentation%20Diagram/01-GD-A-87505.pdf",
            "http://www.svlele.com/cad/stgtank.gif",
            '/assets/images/drawings/drawing (1).jpg',
            '/assets/images/drawings/drawing (2).webp',
            '/assets/images/drawings/drawing (3).png'
        ],
        pids: [
            "01-GD-A-01558",
            "01-GD-A-01559",
            "01-GD-A-149978",
            'https://ui.sharepoint.com/:b:/r/sites/tno/DraftingAndDocumentControl/TNOMR/UREA%20-%20Urea/PRO%20-%20Process/PID%20-%20Piping%20and%20Instrumentation%20Diagram/01-GD-A-87505.pdf?csf=1&web=1&e=pfPvmL',
            '/assets/images/drawings/drawing (4).jpg',
            '/assets/images/drawings/drawing (1).jpg',
            '/assets/images/drawings/drawing (2).webp',
            '/assets/images/drawings/drawing (3).png'

        ],
        docs: [
            '/assets/images/docs/LTT Procedure.pdf',
            '/assets/images/docs/Rescue Plan.pdf',
            '/assets/images/docs/SOCL.pdf',
            '/assets/images/docs/Ventilation Plan (Inspection).pdf',
            '/assets/images/docs/Ventilation Plan (Welding).pdf'
        ],
        category: "pump",
        type: "reciprocating",
        service: "carbonate solution",
        unitPress: "kg/cm²",
        unitTemp: "°C",
        unitPwr: "kW",
        unitCap: "m3/h",
        unitDim: "m3/h",
        opTemp: "155",
        opPress: "150",
        desTemp: "185",
        desPress: "150",
        sucTemp: "90",
        sucPress: "16",
        dischTemp: "184",
        dischPress: "152",
        motorVoltage: "4160",
        ratedPwr: 45,
        numOfStages: 5,
        numOfTubes: "",
        tubeOD: "",
        tubeID: "",
        tubeLength: "",
        desCap: 65,
        matOfConst_shell: "-",
        matOfConst_tube: "",
        matOfConst_case: "316L",


        dimL: 30,
        dimW: 30,
        dimH: 30,

        trips: [
            {
                type: "High Pressure Trip",
                tag: "01PSXH518C",
                sp: 165,
            },
        ],
    },
    {
        title: "01MP03B",
        jargon: ['p3b', 'p3'],
        desc: "'B' LP Carbonate Pump",
        site: "Urea Plant",
        area: "Purification",
        drawings: [
            '/assets/images/drawings/drawing (2).jpg',
            '/assets/images/drawings/drawing (1).webp',
            '/assets/images/drawings/drawing (3).jpg',
            '/assets/images/drawings/drawing (3).png'
        ],
        pids: [
            "01-GD-A-06013",
            "01-GD-A-06014",
            "01-GD-A-06017",

        ],
        docs: [
            '/assets/images/docs/LTT Procedure.pdf',
            '/assets/images/docs/Rescue Plan.pdf',
            '/assets/images/docs/SOCL.pdf',
            '/assets/images/docs/Ventilation Plan (Inspection).pdf',
            '/assets/images/docs/Ventilation Plan (Welding).pdf'
        ],
        category: "pump",
        type: "centrifugal",
        service: "carbonate solution",
        unitPress: "kg/cm2",
        unitTemp: "celcius",
        unitPwr: "kW",
        unitCap: "m3/h",
        opTemp: "32",
        opPress: "22",
        desTemp: "40",
        desPress: "25",
        sucTemp: "30",
        sucPress: "4",
        dischTemp: "141",
        dischPress: "192",
        motorVoltage: "480",
        ratedPwr: 25,
        numOfStages: 1,
        numOfTubes: "",
        tubeOD: "",
        tubeID: "",
        tubeLength: "",
        desCap: 65,
        matOfConst_shell: "",
        matOfConst_tube: "",
        matOfConst_case: "304L",




    },
    {
        title: "02MK01A",
        jargon: ['k1a', 'k1', 'atomizer', 'a atomizer', 'blower', 'a blower'],
        desc: "'A' Atomizing Air Blower",
        site: "Urea Plant",
        area: "Granulation",
        drawings: [
            '/assets/images/drawings/drawing (1).jpg',
            '/assets/images/drawings/drawing (4).jpg',
            '/assets/images/drawings/drawing (1).webp',
            '/assets/images/drawings/drawing (3).jpg',
            '/assets/images/drawings/drawing (1).png',
        ],
        pids: [
            "01-GD-A-68744",
            "01-GD-C-06648",
            "02-GD-A-33217",

        ],
        docs: [
            '/assets/images/docs/LTT Procedure.pdf',
            '/assets/images/docs/Rescue Plan.pdf',
            '/assets/images/docs/SOCL.pdf',
            '/assets/images/docs/Ventilation Plan (Inspection).pdf',
            '/assets/images/docs/Ventilation Plan (Welding).pdf'
        ],
        category: "blower",
        type: "centrifugal",
        service: "air",
        unitPress: "kg/cm2",
        unitTemp: "celcius",
        unitPwr: "kW",
        unitCap: "m3/h",
        opTemp: "150",
        opPress: "0.55",
        desTemp: "160",
        desPress: "1",
        sucTemp: "34",
        sucPress: "4",
        dischTemp: "141",
        dischPress: "192",
        motorVoltage: "4160",
        ratedPwr: 177,
        numOfStages: 1,
        numOfTubes: "",
        tubeOD: "",
        tubeID: "",
        tubeLength: "",
        desCap: 65,
        matOfConst_shell: "-",
        matOfConst_tube: "",
        matOfConst_case: "",




    },
    {
        title: "02MME5A",
        jargon: ['cursher', 'a crusher'],
        desc: "'A' Crusher",
        site: "Urea Plant",
        area: "Granulation",
        drawings: [
            '/assets/images/drawings/drawing (1).webp',
            '/assets/images/drawings/drawing (2).webp',
            '/assets/images/drawings/drawing (3).png',
            '/assets/images/drawings/drawing (4).jpg'
        ],
        pids: [
            "01-GD-C-78994",
            "01-GD-A-45117",
            "03-GD-A-96687",

        ],
        docs: [
            '/assets/images/docs/LTT Procedure.pdf',
            '/assets/images/docs/Rescue Plan.pdf',
            '/assets/images/docs/SOCL.pdf',
            '/assets/images/docs/Ventilation Plan (Inspection).pdf',
            '/assets/images/docs/Ventilation Plan (Welding).pdf'
        ],
        category: "crusher",
        type: "granular",
        service: "urea",
        unitPress: "kg/cm2",
        unitTemp: "celcius",
        unitPwr: "kW",
        unitCap: "m3/h",
        opTemp: "100",
        opPress: "",
        desTemp: "100",
        desPress: "",
        inletTemp: "",
        sucPress: "",
        outletTemp: "141",
        dischPress: "",
        motorVoltage: "18",
        ratedPwr: 120,
        numOfStages: "",
        numOfTubes: "",
        tubeOD: "",
        tubeID: "",
        tubeLength: "",
        desCap: 30,
        matOfConst_shell: "",
        matOfConst_tube: "",
        matOfConst_case: "carbon steel",




    },
    {
        title: "07MP02B",
        jargon: [
            'cooling water pump',
            'cooling tower pump',
            'cw pump',
            'b cooling water pump',
            'middle pump'
        ],
        desc: "'B' Cooling Water Circulation Pump",
        site: "Urea Plant",
        area: "Cooling",
        drawings: [
            '/assets/images/drawings/drawing (4).jpg',
            '/assets/images/drawings/drawing (2).webp',
            '/assets/images/drawings/drawing (1).jpg'
        ],
        pids: [
            "01-GD-A-88474",
            "01-GD-A-03315",
            "01-GD-A-09987",
        ],
        docs: [
            '/assets/images/docs/LTT Procedure.pdf',
            '/assets/images/docs/Rescue Plan.pdf',
            '/assets/images/docs/SOCL.pdf',
            '/assets/images/docs/Ventilation Plan (Inspection).pdf',
            '/assets/images/docs/Ventilation Plan (Welding).pdf'
        ],
        category: "pump",
        type: "centrifugal",
        service: "cooling water",
        unitPress: "kg/cm2",
        unitTemp: "celcius",
        unitPwr: "kW",
        unitCap: "m3/h",
        opTemp: "35",
        opPress: "4",
        desTemp: "50",
        desPress: "10",
        sucTemp: "32",
        sucPress: "3",
        dischTemp: "31",
        dischPress: "4.2",
        motorVoltage: "75",
        ratedPwr: 206,
        numOfStages: 1,
        numOfTubes: "",
        tubeOD: "",
        tubeID: "",
        tubeLength: "",
        desCap: 65,
        matOfConst_shell: "",
        matOfConst_tube: "",
        matOfConst_case: "carbon steel",

    },

]



















// export const assetDetails = [
//     {
//         title: "01MP02C",
//         jargon: ['p2c', 'mp2c', 'ebara p2', 'new p2', 'carbonate pump'],
//         desc: "'C' HP Carbonate Pump",
//         site: "Urea Plant",
//         drawings: [
//             '/assets/images/drawings/drawing (1).jpg',
//             '/assets/images/drawings/drawing (2).webp',
//             '/assets/images/drawings/drawing (3).jpg'
//         ],
//         category: "pump",
//         type: "reciprocating",
//         service: "carbonate solution",
//         unitPress: "kg/cm2",
//         unitTemp: "celcius",
//         unitPwr: "kW",
//         unitCap: "m3/h",
//         opTemp: "155",
//         opPress: "150",
//         desTemp: "185",
//         desPress: "150",
//         sucTemp: "90",
//         sucPress: "16",
//         dischTemp: "184",
//         dischPress: "152",
//         motorVoltage: "42",
//         ratedPwr: 45,
//         numOfStages: 5,
//         numOfTubes: "",
//         tubeOD: "",
//         tubeID: "",
//         tubeLength: "",
//         desCap: 65,
//         matOfConst: {
//             shell: "",
//             tube: "",
//             case: "316L",


//         },




//     },
//     {
//         title: "01MP03B",
//         jargon: ['p3b', 'p3'],
//         desc: "'B' LP Carbonate Pump",
//         site: "Urea Plant",
//         drawings: [
//             '/assets/images/drawings/drawing (1).jpg',
//             '/assets/images/drawings/drawing (2).webp',
//             '/assets/images/drawings/drawing (3).jpg'
//         ],
//         category: "pump",
//         type: "centrifugal",
//         service: "carbonate solution",
//         unitPress: "kg/cm2",
//         unitTemp: "celcius",
//         unitPwr: "kW",
//         unitCap: "m3/h",
//         opTemp: "32",
//         opPress: "22",
//         desTemp: "40",
//         desPress: "25",
//         sucTemp: "30",
//         sucPress: "4",
//         dischTemp: "141",
//         dischPress: "192",
//         motorVoltage: "42",
//         ratedPwr: 25,
//         numOfStages: 1,
//         numOfTubes: "",
//         tubeOD: "",
//         tubeID: "",
//         tubeLength: "",
//         desCap: 65,
//         matOfConst: {
//             shell: "",
//             tube: "",
//             case: "304L",


//         },




//     },
//     {
//         title: "02MK01A",
//         jargon: ['k1a', 'k1', 'atomizer', 'a atomizer', 'blower', 'a blower'],
//         desc: "'A' Atomizing Air Blower",
//         site: "Urea Plant",
//         drawings: [
//             '/assets/images/drawings/drawing (1).jpg',
//             '/assets/images/drawings/drawing (2).webp',
//             '/assets/images/drawings/drawing (3).jpg'
//         ],
//         category: "blower",
//         type: "centrifugal",
//         service: "air",
//         unitPress: "kg/cm2",
//         unitTemp: "celcius",
//         unitPwr: "kW",
//         unitCap: "m3/h",
//         opTemp: "150",
//         opPress: "0.55",
//         desTemp: "160",
//         desPress: "1",
//         sucTemp: "34",
//         sucPress: "4",
//         dischTemp: "141",
//         dischPress: "192",
//         motorVoltage: "42",
//         ratedPwr: 177,
//         numOfStages: 1,
//         numOfTubes: "",
//         tubeOD: "",
//         tubeID: "",
//         tubeLength: "",
//         desCap: 65,
//         matOfConst: {
//             shell: "",
//             tube: "",

//         },




//     },
//     {
//         title: "02MME5A",
//         jargon: ['cursher', 'a crusher'],
//         desc: "'A' Crusher",
//         site: "Urea Plant",
//         drawings: [
//             '/assets/images/drawings/drawing (1).jpg',
//             '/assets/images/drawings/drawing (2).webp',
//             '/assets/images/drawings/drawing (3).jpg'
//         ],
//         category: "crusher",
//         type: "granular",
//         service: "urea",
//         unitPress: "kg/cm2",
//         unitTemp: "celcius",
//         unitPwr: "kW",
//         unitCap: "m3/h",
//         opTemp: "100",
//         opPress: "",
//         desTemp: "100",
//         desPress: "",
//         inletTemp: "",
//         sucPress: "",
//         outletTemp: "141",
//         dischPress: "",
//         motorVoltage: "18",
//         ratedPwr: 120,
//         numOfStages: "",
//         numOfTubes: "",
//         tubeOD: "",
//         tubeID: "",
//         tubeLength: "",
//         desCap: 30,
//         matOfConst: {
//             shell: "",
//             tube: "",
//             case: "carbon steel",


//         },




//     },
//     {
//         title: "07MP02B",
//         jargon: [
//             'cooling water pump',
//             'cooling tower pump',
//             'cw pump',
//             'b cooling water pump',
//             'middle pump'
//         ],
//         desc: "'B' Cooling Water Circulation Pump",
//         site: "Urea Plant",
//         drawings: [
//             '/assets/images/drawings/drawing (1).jpg',
//             '/assets/images/drawings/drawing (2).webp',
//             '/assets/images/drawings/drawing (3).jpg'
//         ],
//         category: "pump",
//         type: "centrifugal",
//         service: "cooling water",
//         unitPress: "kg/cm2",
//         unitTemp: "celcius",
//         unitPwr: "kW",
//         unitCap: "m3/h",
//         opTemp: "35",
//         opPress: "4",
//         desTemp: "50",
//         desPress: "10",
//         sucTemp: "32",
//         sucPress: "3",
//         dischTemp: "31",
//         dischPress: "4.2",
//         motorVoltage: "75",
//         ratedPwr: 206,
//         numOfStages: 1,
//         numOfTubes: "",
//         tubeOD: "",
//         tubeID: "",
//         tubeLength: "",
//         desCap: 65,
//         matOfConst: {
//             shell: "",
//             tube: "",
//             case: "carbon steel",

//         },




//     },
// ]