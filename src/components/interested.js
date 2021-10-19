import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

export default class Interested extends React.Component {
	constructor(props) {
		super(props);
 		this.state = {
            aboutInfo: '',
        };
	}

	componentDidMount() {
		this.apiCall();
	}

    

    apiCall(){
        // let urlHost = window.location.host;
        let urlHost = this.props.apiUrl;
		const url = urlHost+"/items/interested";
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
				aboutInfo: r.data.info,
			})
		})
    }
    
	render() {

		return (
            <div className="interestedSection">
                <div className="container">
                    <div className="sectTitle">
                        <ScrollAnimation animateIn="fadeIn" duration="1.5" delay="0">
                            <h1>interested?</h1>
                        </ScrollAnimation>

                        <ScrollAnimation animateIn="fadeInUp" duration="1.5" delay="200">
                            <p>
                            {this.state.aboutInfo} <a href="#">contact us</a>.</p>
                        </ScrollAnimation>
                        
                    </div>
                </div>
            </div>
		);
	}	
}