import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

import OwlCarousel from 'react-owl-carousel';  

import 'owl.carousel/dist/assets/owl.carousel.css';  

import 'owl.carousel/dist/assets/owl.theme.default.css';

export default class Clients extends React.Component {
	constructor(props) {
		super(props);
 		this.state = {
            items: [],
            options: {
                loop: false,
                margin: 15,
                nav: true,
                navText: ['<i class="icon-arrow"></i>','<i class="icon-arrow"></i>'],
                responsive: {
                    0: {
                        items: 2,
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
		this.apiCall();
	}

    

    apiCall(){
        // let urlHost = window.location.host;
        let urlHost = this.props.apiUrl;
		const url = urlHost+"/items/clients";
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
				items: r.data,
			})
		})
    }

	render() {
		var itemsList = this.state.items.slice(0, 15).map((i)=>{
            return(
                <div className="item" key={i.id}>
                    <div className="clientLogo">
                        <img src={"http://localhost:8055/assets/"+i.icon} alt=""/>
                    </div>
                </div>
            )
        })

		return (
            <div className="clients" id="clients">
                <div className="container">
                    <div className="sectTitle">
                        <ScrollAnimation animateIn="fadeInUp" duration="1.5" delay="0">
                            <span data-aos="fade-up" data-aos-easing="ease-in-sine" data-aos-duration="1500"  data-aos-delay="0"></span>
                        </ScrollAnimation>
                        <ScrollAnimation animateIn="fadeInUp" duration="1.5" delay="200">
                            <h1>Some of our Satisfied Clients</h1>
                        </ScrollAnimation>
                    </div>
                    <ScrollAnimation animateIn="fadeIn" duration="1.5" delay="800">
                        { (!this.state.items || this.state.items.length == 0)
                            ? null
                            : (
                                <OwlCarousel  
                                    className="clientsSlider owl-theme"
                                    {...this.state.options}>  
                                    
                                    {itemsList}

                                </OwlCarousel>
                            )
                        }
                    </ScrollAnimation>
                    
                    
                </div>
            </div>
		);
	}	
}