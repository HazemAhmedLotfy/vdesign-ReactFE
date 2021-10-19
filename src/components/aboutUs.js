import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

export default class AboutUs extends React.Component {
	constructor(props) {
		super(props);
 		this.state = {
            aboutTitle: '',
            aboutInfo: '',
        };
	}

	componentDidMount() {
		this.apiCall();
	}

    

    apiCall(){
        // let urlHost = window.location.host;
        let urlHost = this.props.apiUrl;
		const url = urlHost+"/items/aboutus";
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
				aboutTitle: r.data.title,
                aboutInfo: r.data.info,
			})
		})
    }

	render() {

		return (
            <div className="aboutUs">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-5">
                            <div className="sectTitle">
                            <ScrollAnimation animateIn="fadeInUp" duration="1.5" delay="0">
                                <span></span>
                            </ScrollAnimation>

                            <ScrollAnimation animateIn="fadeInUp" duration="1.5" delay="400">
                                <h1>{this.state.aboutTitle}</h1>
                            </ScrollAnimation>

                            </div>
                        </div>

                        <div className="col-md-7">
                            <ScrollAnimation animateIn="fadeIn" duration="1.5" delay="1000">
                                <div className="sectText">
                                    <p>
                                        {this.state.aboutInfo}
                                    </p>
                                </div>
                            </ScrollAnimation>
                            
                        </div>
                    </div>
                </div>
            </div>
		);
	}	
}