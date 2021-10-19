import React from 'react';
import OwlCarousel from 'react-owl-carousel';  
import ScrollAnimation from 'react-animate-on-scroll';

import 'owl.carousel/dist/assets/owl.carousel.css';  

import 'owl.carousel/dist/assets/owl.theme.default.css';

export default class Interior extends React.Component {
	constructor(props) {
		super(props);
 		this.state = {
            items: [],
        };
	}

	componentDidMount() {
		this.apiCall();
	}

    

    apiCall(){
        // let urlHost = window.location.host;
        let urlHost = this.props.apiUrl;
		const url = urlHost+"/items/interiordesign";
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
		var itemsList = this.state.items.slice(0, 3).map((i)=>{
            return(
                <div className="item" key={i.id}>
                    <p>
                        {i.title}
                    </p>
                </div>
            )
        })

		return (
            <div className="interiorDesign" id="services">
         
                <div className="container">
                    <div className="interiorInfo">
                        <ScrollAnimation animateIn="fadeInRight" duration="1.5" delay="0">
                            <h1 className="d-flex">
                                <ScrollAnimation animateIn="fadeIn" duration="1.5" delay="1400">
                                    <i className="icon-furniture"></i>
                                </ScrollAnimation>
                                Interior Design
                            </h1>
                        </ScrollAnimation>

                        <ScrollAnimation animateIn="fadeInUp" duration="1.5" delay="1600">
                            { (!this.state.items || this.state.items.length == 0)
                            ? null
                            : (
                                <OwlCarousel items={1}  
                                    className="interiorSlider owl-theme"  
                                    loop  
                                    nav  
                                    margin={0} 
                                    navText={['<i class="icon-arrow"></i>','<i class="icon-arrow"></i>']}>  
                                    
                                    {itemsList}

                                </OwlCarousel>
                            )
                            }
                         </ScrollAnimation>
                        {/* data-aos="fade-zoom-in" data-aos-easing="ease-in-sine" data-aos-duration="1500"  data-aos-delay="1000"  */}
                        <h2>services</h2>
                    </div>
                </div>
                
            </div>
		);
	}	
}