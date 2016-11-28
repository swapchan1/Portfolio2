(function(){
    
    var widgetGeneratorApp = angular.module('ProjectWidgetsGenerator', []);
    
    widgetGeneratorApp.controller('ProjectWidgetsController', function() {
        
        this.posts = projectWidgets;
        this.numOfPosts = 4;
        this.view = 1;
        
        this.setView = function(val) {
            this.view = val;
        };
        
        this.isView = function(val) {
            return this.view === val;
        };
        
    });
    
    var projectWidgets = 
        [
            {
                categoryExp: "widgetCntrl.isView(2) || widgetCntrl.isView(1)",
                widgetTitle: "In-Campus Locator",
                widgetDescription: 'A Smart Kitchen Experience',
                pageLink: "campusnav.html",
                widgetImage:"In_campus_locator/Pics/logo.png"
            },
            
            {
                categoryExp: "widgetCntrl.isView(3) || widgetCntrl.isView(1)",
                widgetTitle: "DinnerCall",
                widgetDescription: 'UX Design & Evaluation',
                pageLink: "DinnerCall.html",
                widgetImage:"DinnerCall/pics/logo.jpg"
            },
            
            {
                categoryExp: "widgetCntrl.isView(4) || widgetCntrl.isView(1)",
                widgetTitle: "Visual Analytics",
                widgetDescription: 'Arduino Physical Prototype',
                pageLink: "Vizalanalytics.html",
                widgetImage:"assets/images/portfolio/campusnav/logo.png"
            },
            
            {
                categoryExp: "widgetCntrl.isView(5) || widgetCntrl.isView(1)",
                widgetTitle: "Wise-Choice",
                widgetDescription: 'HCI Research Study',
                pageLink: "wisechoice.html",
                widgetImage:"assets/images/portfolio/campusnav/logo.png"
            }/*,

            {
                categoryExp: "widgetCntrl.isView(5) || widgetCntrl.isView(1)",
                widgetTitle: "Advocacy of Social Networks",
                widgetDescription: 'HCI Research Study',
                pageLink: "advocacy.html"
            },
            
            {
                categoryExp: "widgetCntrl.isView(4) || widgetCntrl.isView(1)",
                widgetTitle: "Wallfie",
                widgetDescription: 'Interactive Photowall Prototype',
                pageLink: "wallfie.html"
            },
            
            {
                categoryExp: "widgetCntrl.isView(3) || widgetCntrl.isView(1)",
                widgetTitle: "Flickr",
                widgetDescription: 'Usability & Evaluation Study',
                pageLink: "flickr.html"
            },
            
            {
                categoryExp: "widgetCntrl.isView(2) || widgetCntrl.isView(1)",
                widgetTitle: "HomeTurf",
                widgetDescription: 'Connecting Neighbors Better',
                pageLink: "hometurf.html"
            },
            
            {
                categoryExp: "widgetCntrl.isView(2) || widgetCntrl.isView(1)",
                widgetTitle: "DressWiser",
                widgetDescription: 'Interactive Dressing Mirror',
                pageLink: "dresswiser.html"
            },*/
        ];
})();