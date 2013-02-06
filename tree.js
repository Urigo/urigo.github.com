/**
 * Created with JetBrains PhpStorm.
 * User: urigoldshtein
 * Date: 5/28/12
 * Time: 9:26 PM
 * To change this template use File | Settings | File Templates.
 */

var labelType, useGradients, nativeTextSupport, animate;

(function() {
    var ua = navigator.userAgent,
        iStuff = ua.match(/iPhone/i) || ua.match(/iPad/i),
        typeOfCanvas = typeof HTMLCanvasElement,
        nativeCanvasSupport = (typeOfCanvas == 'object' || typeOfCanvas == 'function'),
        textSupport = nativeCanvasSupport
            && (typeof document.createElement('canvas').getContext('2d').fillText == 'function');
    //I'm setting this based on the fact that ExCanvas provides text support for IE
    //and that as of today iPhone/iPad current text support is lame
    labelType = (!nativeCanvasSupport || (textSupport && !iStuff))? 'Native' : 'HTML';
    nativeTextSupport = labelType == 'Native';
    useGradients = nativeCanvasSupport;
    animate = !(iStuff || !nativeCanvasSupport);
})();

var Log = {
    elem: false,
    write: function(text){
        if (!this.elem)
            this.elem = document.getElementById('log');
        this.elem.innerHTML = text;
        this.elem.style.left = (500 - this.elem.offsetWidth / 2) + 'px';
    }
};


function init(){
    //init data
    var json = {
        id: "Life",
        name: "Life",
        data: {'url':'#/'},
        children: [{
            id: "Professionalism_and_education",
            name: "Professionalism and education",
            data: {'url':'#/?urlParam=Professionalism_and_education'},
            children: [{
                id: "Professionalism_and_education/Computers",
                name: "Computers",
                data: {'url':'#/?urlParam=Professionalism_and_education/Computers'},
                children: [{
                    id: "Professionalism_and_education/Computers/Programming",
                    name: "Programming",
                    data: {'url':'#/?urlParam=Professionalism_and_education/Computers/Programming'},
                    children: [{
                        id: "Professionalism_and_education/Computers/Programming/Web",
                        name: "Web",
                        data: {'url':'#/?urlParam=Professionalism_and_education/Computers/Programming/Web'},
                        children: [{
                            id: "Professionalism_and_education/Computers/Programming/Web/Tools",
                            name: "Tools",
                            data: {'url':'#/?urlParam=Professionalism_and_education/Computers/Programming/Web/Tools'},
                            children: [{
                                id: "Professionalism_and_education/Computers/Programming/Web/Tools/Source_control",
                                name: "Source Control",
                                data: {'url':'#/?urlParam=Professionalism_and_education/Computers/Programming/Web/Tools/Source_control'},
                                children: []
                            },{
                                id: "Professionalism_and_education/Computers/Programming/Web/Tools/Testing",
                                name: "Testing",
                                data: {'url':'#/?urlParam=Professionalism_and_education/Computers/Programming/Web/Tools/Testing'},
                                children: []
                            },{
                                id: "Professionalism_and_education/Computers/Programming/Web/Tools/Performance",
                                name: "Performance",
                                data: {'url':'#/?urlParam=Professionalism_and_education/Computers/Programming/Web/Tools/Performance'},
                                children: []
                            },{
                                id: "Professionalism_and_education/Computers/Programming/Web/Tools/Libraries",
                                name: "Libraries",
                                data: {'url':'#/?urlParam=Professionalism_and_education/Computers/Programming/Web/Tools/Libraries'},
                                children: [{
                                    id: "Professionalism_and_education/Computers/Programming/Web/Tools/Libraries/Maps",
                                    name: "Maps",
                                    data: {'url':'#/?urlParam=Professionalism_and_education/Computers/Programming/Web/Tools/Libraries/Maps'},
                                    children: []
                                }]
                            },{
                                id: "Professionalism_and_education/Computers/Programming/Web/Tools/Frameworks",
                                name: "Frameworks",
                                data: {'url':'#/?urlParam=Professionalism_and_education/Computers/Programming/Web/Tools/Frameworks'},
                                children: [{
                                    id: "Professionalism_and_education/Computers/Programming/Web/Tools/Libraries/Frameworks/Symfony2",
                                    name: "Symfony2",
                                    data: {'url':'#/?urlParam=Professionalism_and_education/Computers/Programming/Web/Tools/Frameworks/Symfony2'},
                                    children: []
                                },{
                                    id: "Professionalism_and_education/Computers/Programming/Web/Tools/Libraries/Frameworks/Yeoman",
                                    name: "Yeoman",
                                    data: {'url':'#/?urlParam=Professionalism_and_education/Computers/Programming/Web/Tools/Frameworks/Yeoman'},
                                    children: []
                                }]
                            },{
                                id: "Professionalism_and_education/Computers/Programming/Web/Tools/Scraping",
                                name: "Scraping",
                                data: {'url':'#/?urlParam=Professionalism_and_education/Computers/Programming/Web/Tools/Scraping'},
                                children: []
                            },{
                                id: "Professionalism_and_education/Computers/Programming/Web/Tools/Server",
                                name: "Server",
                                data: {'url':'#/?urlParam=Professionalism_and_education/Computers/Programming/Web/Tools/Server'},
                                children: [{
                                    id: "Professionalism_and_education/Computers/Programming/Web/Tools/Server/Apache",
                                    name: "Apache",
                                    data: {'url':'#/?urlParam=Professionalism_and_education/Computers/Programming/Web/Tools/Server/Apache'},
                                    children: []
                                }]
                            }]
                        },{
                            id: "Professionalism_and_education/Computers/Programming/Web/Languages",
                            name: "Languages",
                            data: {'url':'#/?urlParam=Professionalism_and_education/Computers/Programming/Web/Languages'},
                            children: [{
                                id: "Professionalism_and_education/Computers/Programming/Web/Languages/Client_side",
                                name: "Client Side",
                                data: {'url':'#/?urlParam=Professionalism_and_education/Computers/Programming/Web/Languages/Client_side'},
                                children: [{
                                    id: "Professionalism_and_education/Computers/Programming/Web/Languages/Client_side/Javascript",
                                    name: "Javascript",
                                    data: {'url':'#/?urlParam=Professionalism_and_education/Computers/Programming/Web/Languages/Client_side/Javascript'},
                                    children: [{
                                        id: "Professionalism_and_education/Computers/Programming/Web/Languages/Client_side/Javascript/AngularJS",
                                        name: "AngularJS",
                                        data: {'url':'#/?urlParam=Professionalism_and_education/Computers/Programming/Web/Languages/Client_side/Javascript/AngularJS'},
                                        children: []
                                    },{
                                        id: "Professionalism_and_education/Computers/Programming/Web/Languages/Client_side/Javascript/Meteor",
                                        name: "Meteor",
                                        data: {'url':'#/?urlParam=Professionalism_and_education/Computers/Programming/Web/Languages/Client_side/Javascript/Meteor'},
                                        children: []
                                    }]
                                },{
                                    id: "Professionalism_and_education/Computers/Programming/Web/Languages/Client_side/Display",
                                    name: "Display",
                                    data: {'url':'#/?urlParam=Professionalism_and_education/Computers/Programming/Web/Languages/Client_side/Display'},
                                    children: [{
                                        id: "Professionalism_and_education/Computers/Programming/Web/Languages/Client_side/Display/CSS",
                                        name: "CSS",
                                        data: {'url':'#/?urlParam=Professionalism_and_education/Computers/Programming/Web/Languages/Client_side/Display/CSS'},
                                        children: []
                                    }]
                                }]
                            }]
                        }]
                    }]
                }, {
                    id: "Professionalism_and_education/Computers/Usage",
                    name: "Usage",
                    data: {'url':'#/?urlParam=Professionalism_and_education/Computers/Usage'},
                    children: [{
                        id: "node48",
                        name: "Professionalism and education inner",
                        data: {'url':'#/Professionalism_and_education/Professionalism_and_education'},
                        children: []
                    }, {
                        id: "node49",
                        name: "4.9",
                        data: {},
                        children: []
                    }, {
                        id: "node410",
                        name: "4.10",
                        data: {},
                        children: []
                    }, {
                        id: "node411",
                        name: "4.11",
                        data: {},
                        children: []
                    }]
                }, {
                    id: "Professionalism_and_education/Computers/UI",
                    name: "UI",
                    data: {'url':'#/?urlParam=Professionalism_and_education/Computers/UI'},
                    children: [{
                        id: "Professionalism_and_education/Computers/UI/Devices",
                        name: "Devices",
                        data: {'url':'#/?urlParam=Professionalism_and_education/Computers/UI/Devices'},
                        children: []
                    },{
                        id: "Professionalism_and_education/Computers/UI/Examples",
                        name: "Examples",
                        data: {'url':'#/?urlParam=Professionalism_and_education/Computers/UI/Examples'},
                        children: []
                    },{
                        id: "Professionalism_and_education/Computers/UI/Prototype",
                        name: "Prototype",
                        data: {'url':'#/?urlParam=Professionalism_and_education/Computers/UI/Prototype'},
                        children: []
                    },{
                        id: "Professionalism_and_education/Computers/UI/Tools",
                        name: "Tools",
                        data: {'url':'#/?urlParam=Professionalism_and_education/Computers/UI/Tools'},
                        children: []
                    }]
                }, {
                    id: "node314",
                    name: "3.14",
                    data: {},
                    children: [{
                        id: "node415",
                        name: "4.15",
                        data: {},
                        children: []
                    }, {
                        id: "node416",
                        name: "4.16",
                        data: {},
                        children: []
                    }, {
                        id: "node417",
                        name: "4.17",
                        data: {},
                        children: []
                    }, {
                        id: "node418",
                        name: "4.18",
                        data: {},
                        children: []
                    }]
                }, {
                    id: "node319",
                    name: "3.19",
                    data: {},
                    children: [{
                        id: "node420",
                        name: "4.20",
                        data: {},
                        children: []
                    }, {
                        id: "node421",
                        name: "4.21",
                        data: {},
                        children: []
                    }]
                }]
            }, {
                id: "Professionalism_and_education/Management",
                name: "Management",
                data: {'url':'#/?urlParam=Professionalism_and_education/Management'},
                children: [{
                    id: "Professionalism_and_education/Management/Tools",
                    name: "Tools",
                    data: {'url':'#/?urlParam=Professionalism_and_education/Management/Tools'},
                    children: []
                }]
            }, {
                id: "Professionalism_and_education/Education",
                name: "Education",
                data: {'url':'#/?urlParam=Professionalism_and_education/Education'},
                children: []
            }]
        }, {
            id: "Money",
            name: "Money",
            data: {'url':'#/?urlParam=Money'},
            children: [{
                id: "Money/Savings",
                name: "Savings",
                data: {'url':'#/?urlParam=Money/Savings'},
                children: [{
                    id: "Money/Savings/Expenses_types",
                    name: "Expenses types",
                    data: {'url':'#/?urlParam=Money/Savings/Expenses_types'},
                    children: [{
                        id: "Money/Savings/Expenses_types/Commissions",
                        name: "Commissions",
                        data: {'url':'#/?urlParam=Money/Savings/Expenses_types/Commissions'},
                        children: []
                    }, {
                        id: "Money/Savings/Expenses_types/Communication",
                        name: "Communication",
                        data: {'url':'#/?urlParam=Money/Savings/Expenses_types/Communication'},
                        children: []
                    }, {
                        id: "Money/Savings/Expenses_types/Energy",
                        name: "Energy",
                        data: {'url':'#/?urlParam=Money/Savings/Expenses_types/Energy'},
                        children: []
                    }]
                }, {
                    id: "node330",
                    name: "3.30",
                    data: {},
                    children: [{
                        id: "node431",
                        name: "4.31",
                        data: {},
                        children: []
                    }]
                }, {
                    id: "node332",
                    name: "3.32",
                    data: {},
                    children: [{
                        id: "node433",
                        name: "4.33",
                        data: {},
                        children: []
                    }, {
                        id: "node434",
                        name: "4.34",
                        data: {},
                        children: []
                    }, {
                        id: "node435",
                        name: "4.35",
                        data: {},
                        children: []
                    }, {
                        id: "node436",
                        name: "4.36",
                        data: {},
                        children: []
                    }]
                }]
            }, {
                id: "node237",
                name: "2.37",
                data: {},
                children: [{
                    id: "node338",
                    name: "3.38",
                    data: {},
                    children: [{
                        id: "node439",
                        name: "4.39",
                        data: {},
                        children: []
                    }, {
                        id: "node440",
                        name: "4.40",
                        data: {},
                        children: []
                    }, {
                        id: "node441",
                        name: "4.41",
                        data: {},
                        children: []
                    }]
                }, {
                    id: "node342",
                    name: "3.42",
                    data: {},
                    children: [{
                        id: "node443",
                        name: "4.43",
                        data: {},
                        children: []
                    }]
                }, {
                    id: "node344",
                    name: "3.44",
                    data: {},
                    children: [{
                        id: "node445",
                        name: "4.45",
                        data: {},
                        children: []
                    }, {
                        id: "node446",
                        name: "4.46",
                        data: {},
                        children: []
                    }, {
                        id: "node447",
                        name: "4.47",
                        data: {},
                        children: []
                    }]
                }, {
                    id: "node348",
                    name: "3.48",
                    data: {},
                    children: [{
                        id: "node449",
                        name: "4.49",
                        data: {},
                        children: []
                    }, {
                        id: "node450",
                        name: "4.50",
                        data: {},
                        children: []
                    }, {
                        id: "node451",
                        name: "4.51",
                        data: {},
                        children: []
                    }, {
                        id: "node452",
                        name: "4.52",
                        data: {},
                        children: []
                    }, {
                        id: "node453",
                        name: "4.53",
                        data: {},
                        children: []
                    }]
                }, {
                    id: "node354",
                    name: "3.54",
                    data: {},
                    children: [{
                        id: "node455",
                        name: "4.55",
                        data: {},
                        children: []
                    }, {
                        id: "node456",
                        name: "4.56",
                        data: {},
                        children: []
                    }, {
                        id: "node457",
                        name: "4.57",
                        data: {},
                        children: []
                    }]
                }]
            }, {
                id: "node258",
                name: "2.58",
                data: {},
                children: [{
                    id: "node359",
                    name: "3.59",
                    data: {},
                    children: [{
                        id: "node460",
                        name: "4.60",
                        data: {},
                        children: []
                    }, {
                        id: "node461",
                        name: "4.61",
                        data: {},
                        children: []
                    }, {
                        id: "node462",
                        name: "4.62",
                        data: {},
                        children: []
                    }, {
                        id: "node463",
                        name: "4.63",
                        data: {},
                        children: []
                    }, {
                        id: "node464",
                        name: "4.64",
                        data: {},
                        children: []
                    }]
                }]
            }]
        }, {
            id: "Time",
            name: "Time",
            data: {'url':'#/?urlParam=Time'},
            children: [{
                id: "node266",
                name: "2.66",
                data: {},
                children: [{
                    id: "node367",
                    name: "3.67",
                    data: {},
                    children: [{
                        id: "node468",
                        name: "4.68",
                        data: {},
                        children: []
                    }, {
                        id: "node469",
                        name: "4.69",
                        data: {},
                        children: []
                    }, {
                        id: "node470",
                        name: "4.70",
                        data: {},
                        children: []
                    }, {
                        id: "node471",
                        name: "4.71",
                        data: {},
                        children: []
                    }]
                }, {
                    id: "node372",
                    name: "3.72",
                    data: {},
                    children: [{
                        id: "node473",
                        name: "4.73",
                        data: {},
                        children: []
                    }, {
                        id: "node474",
                        name: "4.74",
                        data: {},
                        children: []
                    }, {
                        id: "node475",
                        name: "4.75",
                        data: {},
                        children: []
                    }, {
                        id: "node476",
                        name: "4.76",
                        data: {},
                        children: []
                    }]
                }, {
                    id: "node377",
                    name: "3.77",
                    data: {},
                    children: [{
                        id: "node478",
                        name: "4.78",
                        data: {},
                        children: []
                    }, {
                        id: "node479",
                        name: "4.79",
                        data: {},
                        children: []
                    }]
                }, {
                    id: "node380",
                    name: "3.80",
                    data: {},
                    children: [{
                        id: "node481",
                        name: "4.81",
                        data: {},
                        children: []
                    }, {
                        id: "node482",
                        name: "4.82",
                        data: {},
                        children: []
                    }]
                }]
            }, {
                id: "node283",
                name: "2.83",
                data: {},
                children: [{
                    id: "node384",
                    name: "3.84",
                    data: {},
                    children: [{
                        id: "node485",
                        name: "4.85",
                        data: {},
                        children: []
                    }]
                }, {
                    id: "node386",
                    name: "3.86",
                    data: {},
                    children: [{
                        id: "node487",
                        name: "4.87",
                        data: {},
                        children: []
                    }, {
                        id: "node488",
                        name: "4.88",
                        data: {},
                        children: []
                    }, {
                        id: "node489",
                        name: "4.89",
                        data: {},
                        children: []
                    }, {
                        id: "node490",
                        name: "4.90",
                        data: {},
                        children: []
                    }, {
                        id: "node491",
                        name: "4.91",
                        data: {},
                        children: []
                    }]
                }, {
                    id: "node392",
                    name: "3.92",
                    data: {},
                    children: [{
                        id: "node493",
                        name: "4.93",
                        data: {},
                        children: []
                    }, {
                        id: "node494",
                        name: "4.94",
                        data: {},
                        children: []
                    }, {
                        id: "node495",
                        name: "4.95",
                        data: {},
                        children: []
                    }, {
                        id: "node496",
                        name: "4.96",
                        data: {},
                        children: []
                    }]
                }, {
                    id: "node397",
                    name: "3.97",
                    data: {},
                    children: [{
                        id: "node498",
                        name: "4.98",
                        data: {},
                        children: []
                    }]
                }, {
                    id: "node399",
                    name: "3.99",
                    data: {},
                    children: [{
                        id: "node4100",
                        name: "4.100",
                        data: {},
                        children: []
                    }, {
                        id: "node4101",
                        name: "4.101",
                        data: {},
                        children: []
                    }, {
                        id: "node4102",
                        name: "4.102",
                        data: {},
                        children: []
                    }, {
                        id: "node4103",
                        name: "4.103",
                        data: {},
                        children: []
                    }]
                }]
            }, {
                id: "node2104",
                name: "2.104",
                data: {},
                children: [{
                    id: "node3105",
                    name: "3.105",
                    data: {},
                    children: [{
                        id: "node4106",
                        name: "4.106",
                        data: {},
                        children: []
                    }, {
                        id: "node4107",
                        name: "4.107",
                        data: {},
                        children: []
                    }, {
                        id: "node4108",
                        name: "4.108",
                        data: {},
                        children: []
                    }]
                }]
            }, {
                id: "node2109",
                name: "2.109",
                data: {},
                children: [{
                    id: "node3110",
                    name: "3.110",
                    data: {},
                    children: [{
                        id: "node4111",
                        name: "4.111",
                        data: {},
                        children: []
                    }, {
                        id: "node4112",
                        name: "4.112",
                        data: {},
                        children: []
                    }]
                }, {
                    id: "node3113",
                    name: "3.113",
                    data: {},
                    children: [{
                        id: "node4114",
                        name: "4.114",
                        data: {},
                        children: []
                    }, {
                        id: "node4115",
                        name: "4.115",
                        data: {},
                        children: []
                    }, {
                        id: "node4116",
                        name: "4.116",
                        data: {},
                        children: []
                    }]
                }, {
                    id: "node3117",
                    name: "3.117",
                    data: {},
                    children: [{
                        id: "node4118",
                        name: "4.118",
                        data: {},
                        children: []
                    }, {
                        id: "node4119",
                        name: "4.119",
                        data: {},
                        children: []
                    }, {
                        id: "node4120",
                        name: "4.120",
                        data: {},
                        children: []
                    }, {
                        id: "node4121",
                        name: "4.121",
                        data: {},
                        children: []
                    }]
                }, {
                    id: "node3122",
                    name: "3.122",
                    data: {},
                    children: [{
                        id: "node4123",
                        name: "4.123",
                        data: {},
                        children: []
                    }, {
                        id: "node4124",
                        name: "4.124",
                        data: {},
                        children: []
                    }]
                }]
            }, {
                id: "node2125",
                name: "2.125",
                data: {},
                children: [{
                    id: "node3126",
                    name: "3.126",
                    data: {},
                    children: [{
                        id: "node4127",
                        name: "4.127",
                        data: {},
                        children: []
                    }, {
                        id: "node4128",
                        name: "4.128",
                        data: {},
                        children: []
                    }, {
                        id: "node4129",
                        name: "4.129",
                        data: {},
                        children: []
                    }]
                }]
            }]
        }, {
            id: "Health_and_beauty",
            name: "Health and beauty",
            data: {'url':'#/?urlParam=Health_and_beauty'},
            children: [{
                id: "Health_and_beauty/Longevity",
                name: "Longevity",
                data: {'url':'#/?urlParam=Health_and_beauty/Longevity'},
                children: []
            }, {
                id: "Health_and_beauty/Beauty",
                name: "Beauty",
                data: {'url':'#/?urlParam=Health_and_beauty/Beauty'},
                children: []
            },{
                id: "Health_and_beauty/Fitness",
                name: "Fitness",
                data: {'url':'#/?urlParam=Health_and_beauty/Fitness'},
                children: [{
                    id: "Health_and_beauty/Fitness/Running",
                    name: "Running",
                    data: {'url':'#/?urlParam=Health_and_beauty/Fitness/Running'},
                    children: []
                }, {
                    id: "Health_and_beauty/Fitness/Strength",
                    name: "Strength",
                    data: {'url':'#/?urlParam=Health_and_beauty/Fitness/Strength'},
                    children: []
                }, {
                    id: "Health_and_beauty/Fitness/Working",
                    name: "Working",
                    data: {'url':'#/?urlParam=Health_and_beauty/Fitness/Working'},
                    children: []
                }]
            },{
                id: "Health_and_beauty/Information",
                name: "Information",
                data: {'url':'#/?urlParam=Health_and_beauty/Information'},
                children: []
            },{
                id: "Health_and_beauty/Nutrition",
                name: "Nutrition",
                data: {'url':'#/?urlParam=Health_and_beauty/Nutrition'},
                children: []
            }]
        }, {
            id: "Soul",
            name: "Soul",
            data: {'url':'#/?urlParam=Soul'},
            children: [{
                id: "Soul/Values",
                name: "Values",
                data: {'url':'#/?urlParam=Soul/Values'},
                children: [{
                    id: "Soul/Values/Openness",
                    name: "Openness",
                    data: {'url':'#/?urlParam=Soul/Values/Openness'},
                    children: []
                },{
                    id: "Soul/Values/Collaboration",
                    name: "Collaboration",
                    data: {'url':'#/?urlParam=Soul/Values/Collaboration'},
                    children: []
                }]
            }, {
                id: "Health_and_beauty/Fitness",
                name: "Fitness",
                data: {'url':'#/?urlParam=Health_and_beauty/Fitness'},
                children: [{
                    id: "Health_and_beauty/Fitness/Running",
                    name: "Running",
                    data: {'url':'#/?urlParam=Health_and_beauty/Fitness/Running'},
                    children: []
                }, {
                    id: "Health_and_beauty/Fitness/Strength",
                    name: "Strength",
                    data: {'url':'#/?urlParam=Health_and_beauty/Fitness/Strength'},
                    children: []
                }]
            },{
                id: "Health_and_beauty/Information",
                name: "Information",
                data: {'url':'#/?urlParam=Health_and_beauty/Information'},
                children: []
            },{
                id: "Health_and_beauty/Nutrition",
                name: "Nutrition",
                data: {'url':'#/?urlParam=Health_and_beauty/Nutrition'},
                children: []
            }]
        }, {
            id: "Home",
            name: "Home",
            data: {'url':'#/?urlParam=Home'},
            children: [{
                id: "Home/Rent",
                name: "Rent",
                data: {'url':'#/?urlParam=Home/Rent'},
                children: []
            }, {
                id: "Home/Outdoor",
                name: "Outdoor",
                data: {'url':'#/?urlParam=Home/Outdoor'},
                children: []
            },{
                id: "Home/Travel",
                name: "Travel",
                data: {'url':'#/?urlParam=Home/Travel'},
                children: []
            }]
        }]
    };
    //end
    //init Spacetree
    //Create a new ST instance
    var st = new $jit.ST({
        //id of viz container element
        injectInto: 'infovis',
        orientation: 'top',
        //set duration for the animation
        duration: 300,
        //set animation transition type
        transition: $jit.Trans.Quart.easeInOut,
        //set distance between node and its children
        levelDistance: 30,
        //enable panning
        Navigation: {
            enable:true,
            panning:true
        },
        //set node and edge styles
        //set overridable=true for styling individual
        //nodes or edges
        Node: {
            height: 40,
            width: 90,
            type: 'rectangle',
            color: '#ABA410',
            overridable: true
        },

        Edge: {
            type: 'bezier',
            overridable: true
        },
        onComplete: function(){
            var x = window.location.href.lastIndexOf('urlParam=');
            if (x != -1)
            {
                var fileName = window.location.href.substr(x+9);
                console.log('Before '+ fileName);
                fileName = decodeURIComponent(fileName)
                //fileName = fileName.replace("%2F","/","gi").replace("%3F","?","gi").replace("%3D","=","gi").replace("%26","&","gi");
                console.log(fileName + ' ' + firstUrl);
                if (fileName != firstUrl)
                {
                    firstUrl = fileName;
                    st.onClick(firstUrl);
                }
            }
        },
        onBeforeCompute: function(node){
            Log.write("loading " + node.name);
        },

        onAfterCompute: function(){
            Log.write("done");
        },

        //This method is called on DOM label creation.
        //Use this method to add event handlers and styles to
        //your node.
        onCreateLabel: function(label, node){
            label.id = node.id;
            label.innerHTML = node.name;
            label.onclick = function(){
                if(normal.checked) {
                    st.onClick(node.id);
                    window.location.href = node.data.url;
                } else {
                    st.setRoot(node.id, 'animate');
                }
            };
            //set label styles
            var style = label.style;
            style.display = '';
            style.width = 80 + 'px';
            style.height = 40 + 'px';
            style.cursor = 'pointer';
            style.color = '#333';
            style.fontSize = '0.8em';
            style.textAlign= 'center';
            style.paddingTop = '3px';
            style.overflow = 'auto';
        },

        //This method is called right before plotting
        //a node. It's useful for changing an individual node
        //style properties before plotting it.
        //The data properties prefixed with a dollar
        //sign will override the global node style properties.
        onBeforePlotNode: function(node){
            //add some color to the nodes in the path between the
            //root node and the selected node.
            if (node.selected) {
                node.data.$color = "#F4F092";
            }
            else {
                delete node.data.$color;
                //if the node belongs to the last plotted level
                if(!node.anySubnode("exist")) {
                    //count children number
                    var count = 0;
                    node.eachSubnode(function(n) { count++; });
                    //assign a node color based on
                    //how many children it has
                    node.data.$color = ['#ABA410', '#ABA410', '#AB7D10', '#ABA410', '#8BAB10', '#64AB10'][count];
                }
            }
        },

        //This method is called right before plotting
        //an edge. It's useful for changing an individual edge
        //style properties before plotting it.
        //Edge data proprties prefixed with a dollar sign will
        //override the Edge global style properties.
        onBeforePlotLine: function(adj){
            if (adj.nodeFrom.selected && adj.nodeTo.selected) {
                adj.data.$color = "#64AB10";
                adj.data.$lineWidth = 3;
            }
            else {
                delete adj.data.$color;
                delete adj.data.$lineWidth;
            }
        }
    });
    //load json data
    st.loadJSON(json);
    //compute node positions and layout
    st.compute();
    //optional: make a translation of the tree
    st.geom.translate(new $jit.Complex(-200, 0), "current");
    //emulate a click on the root node.
    st.onClick(st.root);
    //end
    //Add event handlers to switch spacetree orientation.
    var top = $jit.id('r-top'),
        left = $jit.id('r-left'),
        bottom = $jit.id('r-bottom'),
        right = $jit.id('r-right'),
        normal = $jit.id('s-normal');

    var firstUrl = '';


    function changeHandler() {
        if(this.checked) {
            top.disabled = bottom.disabled = right.disabled = left.disabled = true;
            st.switchPosition(this.value, "animate", {
                onComplete: function(){
                    top.disabled = bottom.disabled = right.disabled = left.disabled = false;
                }
            });
        }
    };

    top.onchange = left.onchange = bottom.onchange = right.onchange = changeHandler;
    //end

}
