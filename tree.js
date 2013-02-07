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
                    }, {
                        id: "Money/Savings/Expenses_types/Food",
                        name: "Food",
                        data: {'url':'#/?urlParam=Money/Savings/Expenses_types/Food'},
                        children: []
                    }, {
                        id: "Money/Savings/Expenses_types/Housing",
                        name: "Housing",
                        data: {'url':'#/?urlParam=Money/Savings/Expenses_types/Housing'},
                        children: []
                    }, {
                        id: "Money/Savings/Expenses_types/Mobility",
                        name: "Mobility",
                        data: {'url':'#/?urlParam=Money/Savings/Expenses_types/Mobility'},
                        children: []
                    }, {
                        id: "Money/Savings/Expenses_types/Give_others",
                        name: "Give others",
                        data: {'url':'#/?urlParam=Money/Savings/Expenses_types/Give_others'},
                        children: []
                    }]
                }, {
                    id: "Money/Savings/Information",
                    name: "Information",
                    data: {'url':'#/?urlParam=Money/Savings/Information'},
                    children: [{
                        id: "node431",
                        name: "4.31",
                        data: {},
                        children: []
                    }]
                }, {
                    id: "Money/Savings/Pension",
                    name: "Pension",
                    data: {'url':'#/?urlParam=Money/Savings/Pension'},
                    children: []
                }]
            }, {
                id: "Money/Profit",
                name: "Profit",
                data: {'url':'#/?urlParam=Money/Profit'},
                children: []
            }]
        }, {
            id: "Time",
            name: "Time",
            data: {'url':'#/?urlParam=Time'},
            children: []
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
                children: [{
                    id: "Health_and_beauty/Beauty/Face",
                    name: "Face",
                    data: {'url':'#/?urlParam=Health_and_beauty/Fitness/Face'},
                    children: []
                },{
                    id: "Health_and_beauty/Beauty/Hair",
                    name: "Hair",
                    data: {'url':'#/?urlParam=Health_and_beauty/Fitness/Hair'},
                    children: []
                },{
                    id: "Health_and_beauty/Beauty/Smell",
                    name: "Smell",
                    data: {'url':'#/?urlParam=Health_and_beauty/Fitness/Smell'},
                    children: []
                },{
                    id: "Health_and_beauty/Beauty/Teeth",
                    name: "Teeth",
                    data: {'url':'#/?urlParam=Health_and_beauty/Fitness/Teeth'},
                    children: []
                }]
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
                }, {
                    id: "Health_and_beauty/Fitness/Swimming",
                    name: "Swimming",
                    data: {'url':'#/?urlParam=Health_and_beauty/Fitness/Swimming'},
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
                },{
                    id: "Soul/Values/Equality",
                    name: "Equality",
                    data: {'url':'#/?urlParam=Soul/Values/Equality'},
                    children: []
                },{
                    id: "Soul/Values/Relations",
                    name: "Relations",
                    data: {'url':'#/?urlParam=Soul/Values/Relations'},
                    children: []
                }]
            }, {
                id: "Soul/Music",
                name: "Music",
                data: {'url':'#/?urlParam=Soul/Values/Music'},
                children: [{
                    id: "Soul/Music/Dance",
                    name: "Dance",
                    data: {'url':'#/?urlParam=Soul/Values/Music/Dance'},
                    children: []
                }, {
                    id: "Soul/Music/Guitar",
                    name: "Guitar",
                    data: {'url':'#/?urlParam=Soul/Values/Music/Guitar'},
                    children: []
                }, {
                    id: "Soul/Music/Electronic",
                    name: "Electronic",
                    data: {'url':'#/?urlParam=Soul/Values/Music/Electronic'},
                    children: []
                }]
            },{
                id: "Soul/Inspiration",
                name: "Inspiration",
                data: {'url':'#/?urlParam=Soul/Inspiration'},
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
            },{
                id: "Home/Things",
                name: "Things",
                data: {'url':'#/?urlParam=Home/Things'},
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
