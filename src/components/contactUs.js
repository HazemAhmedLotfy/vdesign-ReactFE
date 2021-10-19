import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';


export default class ContactUs extends React.Component {
	constructor(props) {
		super(props);
 		this.state = {
            items: [],
        };
	}

	// componentDidMount() {
	// 	this.apiCall();
	// }

    

    // apiCall(){
    //     // let urlHost = window.location.host;
    //     let urlHost = 'localhost:8055'
	// 	const url = "http://"+urlHost+"/items/clients";
    //     let requestheaders = new Headers();
    //     requestheaders.append("Authorization", "Basic dGVzdEBsaWZlcmF5LmNvbToy");
    //     requestheaders.append("Cookie", "GUEST_LANGUAGE_ID=en_US");
 
    //     const requestOptions = {
    //         method: 'GET',
    //         headers: requestheaders,
    //     };
		
    //     fetch(url, requestOptions).then((response) => response.json())
	// 	.then(r => {
	// 		this.setState({
	// 			items: r.data,
	// 		})
	// 	})
    // }

	render() {
		

		return (
            <div className="callBack" id="contact">
                
                <div className="container">
                    <span>
                        <h1 className="floatText">contact us</h1>
                    </span>
                    
                    
                    <div className="sectTitle">
                        <ScrollAnimation animateIn="fadeInUp" duration="1.5" delay="200"> 
                            <h1 data-aos="fade-up" data-aos-easing="ease-in-sine" data-aos-duration="1500"  data-aos-delay="200">
                                <strong>Request Call Back</strong>
                            </h1>
                        </ScrollAnimation>
                        
                        <ScrollAnimation animateIn="fadeInUp" duration="1.5" delay="400">
                            <span data-aos="fade-up" data-aos-easing="ease-in-sine" data-aos-duration="1500"  data-aos-delay="400"></span>
                        </ScrollAnimation>
                    </div>

                    <div className="callBackForm">
                        <ScrollAnimation className="w-100" animateIn="fadeIn" duration="1.5" delay="1000">
                            <input data-aos="fade-in" data-aos-easing="ease-in-sine" data-aos-duration="1500"  data-aos-delay="1000" type="text" placeholder="Your name"/>
                        </ScrollAnimation>
                        <ScrollAnimation className="w-100" animateIn="fadeIn" duration="1.5" delay="1100">
                            <input data-aos="fade-in" data-aos-easing="ease-in-sine" data-aos-duration="1500"  data-aos-delay="1100" type="text" placeholder="Phone number"/>
                        </ScrollAnimation>
                        <ScrollAnimation animateIn="zoomIn" duration="1.5" delay="1200">
                            <input data-aos="fade-zoom-in" data-aos-easing="ease-in-sine" data-aos-duration="1500"  data-aos-delay="1200" type="button" value="Submit"/>
                        </ScrollAnimation>
                    </div>
                </div>
            </div>
		);
	}	
}