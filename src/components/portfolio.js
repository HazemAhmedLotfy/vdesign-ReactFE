import React from 'react';
import OwlCarousel from 'react-owl-carousel';  
import ScrollAnimation from 'react-animate-on-scroll';

import 'owl.carousel/dist/assets/owl.carousel.css';  

import 'owl.carousel/dist/assets/owl.theme.default.css';

export default class Portfolio extends React.Component {
	constructor(props) {
		super(props);
 		this.state = {
            itemsRes: [],
            itemsCons: [],
            options: {
                loop: true,
                margin: 0,
                nav: true,
                navText: ['<i class="icon-arrow"></i>','<i class="icon-arrow"></i>'],
                responsive: {
                    0: {
                        items: 1,
                    },
                    600: {
                        items: 2,
                    },
                    1000: {
                        items: 5,
                    },
                },
            },
        };
	}

	componentDidMount() {
		this.apiCallRes();
        this.apiCallCons();

        document.getElementById("defaultOpenProject").click();
	}

    

    apiCallRes(){
        // let urlHost = window.location.host;
        let urlHost = this.props.apiUrl;
		const url = urlHost+"/items/portfolioresidential";
        let requestheaders = new Headers();
        requestheaders.append("Authorization", "Basic dGVzdEBsaWZlcmF5LmNvbToy");
        requestheaders.append("Cookie", "GUEST_LANGUAGE_ID=en_US");
 
        const requestOptions = {
            method: 'GET',
            headers: requestheaders,
        };
		
        fetch(url, requestOptions).then((response) => response.json())
		.then(r => {
			this.setState({
				itemsRes: r.data,
			})
		})
    }

    apiCallCons(){
        // let urlHost = window.location.host;
        let urlHost = this.props.apiUrl;
		const url = urlHost+"/items/portfoliocommercial";
        let requestheaders = new Headers();
        requestheaders.append("Authorization", "Basic dGVzdEBsaWZlcmF5LmNvbToy");
        requestheaders.append("Cookie", "GUEST_LANGUAGE_ID=en_US");
 
        const requestOptions = {
            method: 'GET',
            headers: requestheaders,
        };
		
        fetch(url, requestOptions).then((response) => response.json())
		.then(r => {
			this.setState({
				itemsCons: r.data,
			})
		})
    }

    openProject(e, proName) {
        var j, tabcontents, tablinkss;
        tabcontents = document.getElementsByClassName("proTabcontent");
        for (j = 0; j < tabcontents.length; j++) {
        tabcontents[j].style.display = "none";
        }
        tablinkss = document.getElementsByClassName("proTab");
        for (j = 0; j < tablinkss.length; j++) {
        tablinkss[j].className = tablinkss[j].className.replace(" active", "");
        }
        document.getElementById(proName).style.display = "block";
        e.currentTarget.className += " active";
    }


// Get the element with id="defaultOpen" and click on it

	render() {
		var itemsListRes = this.state.itemsRes.slice(0, 10).map((i)=>{
            return(
                <div className="item" key={i.id}>
                    <div className="projectItem">
                        <div className="projectImg">
                            <img src={"http://localhost:8055/assets/"+i.image} alt=""/>
                        </div>
                        <div className="projectData">
                            <h1>{i.visualtitle}</h1>
                            <p>{i.title}</p>
                            <span>{i.dateitem}</span>
                        </div>
                    </div>
                </div>
            )
        })

        var itemsListComm = this.state.itemsCons.slice(0, 10).map((i)=>{
            return(
                <div className="item" key={i.id}>
                    <div className="projectItem">
                        <div className="projectImg">
                            <img src={"http://localhost:8055/assets/"+i.image} alt=""/>
                        </div>
                        <div className="projectData">
                            <h1>{i.visualtitle}</h1>
                            <p>{i.title}</p>
                            <span>{i.dateitem}</span>
                        </div>
                    </div>
                </div>
            )
        })

		return (
            <div className="projects" id="projects">
                <div className="container">
                    <ScrollAnimation animateIn="fadeIn" duration="1.5" delay="0">
                        <h1 className="floatText">projects</h1>
                    </ScrollAnimation>

                    
                    <div className="sectTitle">
                        <ScrollAnimation animateIn="fadeInUp" duration="1.5" delay="200">
                            <span></span>
                        </ScrollAnimation>
                        <ScrollAnimation animateIn="fadeInUp" duration="1.5" delay="500">
                            <h1>Simplicity is the ultimate.</h1>
                        </ScrollAnimation>
                    </div>

                    <ScrollAnimation animateIn="fadeIn" duration="1.5" delay="1500">
                        <div className="prjectsTabs">
                            <button className="proTab active" id="defaultOpenProject" onClick={(e) => this.openProject(e, 'Resedential')}>
                                <h4>Resedential</h4>
                            </button>
                            <button className="proTab " onClick={(e) => this.openProject(e, 'Commercial')}>
                                <h4>Commercial</h4>
                            </button>
                        </div>
                    </ScrollAnimation>
                    
                </div>

                <div id="Resedential"className="proTabcontent">
                    <ScrollAnimation animateIn="fadeIn" duration="1.5" delay="1700">
                        { (!this.state.itemsRes || this.state.itemsRes.length == 0)
                            ? null
                            : (
                                <OwlCarousel  
                                    className="resSlider projectSlider owl-theme"  
                                    {...this.state.options}>  
                                    
                                    {itemsListRes}
        
                                </OwlCarousel>
                            )
                        }
                    </ScrollAnimation>

                    
                    
                    
                </div>

                <div id="Commercial" className="proTabcontent">
                    <ScrollAnimation animateIn="fadeIn" duration="1.5" delay="1700">
                        { (!this.state.itemsRes || this.state.itemsRes.length == 0)
                            ? null
                            : (
                                <OwlCarousel  
                                    className="resSlider projectSlider owl-theme"  
                                    {...this.state.options}>  
                                    
                                    {itemsListRes}
        
                                </OwlCarousel>
                            )
                        }
                    </ScrollAnimation>
                    
                </div>
            </div>
		);
	}	
}