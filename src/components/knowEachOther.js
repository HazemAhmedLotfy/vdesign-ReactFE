import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

export default class KnowEachOther extends React.Component {
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
		const url = urlHost+"/items/knoweachother";
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
		var imgKnowList = this.state.items.slice(0, 2).map((i)=>{
            return(
                <ScrollAnimation animateIn="fadeIn" duration="1.5" delay="1200">
                    <li key={i.id}>
                        <img src={"http://localhost:8055/assets/"+i.knowimg} alt="" />
                    </li>
                </ScrollAnimation>

            )
        })

		return (
            <div className="knowEachOther" id="about">
                <div className="container">
                    <div className="secTitle">

                        <ScrollAnimation animateIn="fadeInDown" duration="1.5" delay="400">
                            <h1>Let's get to know each other</h1>
                        </ScrollAnimation>
                        <ScrollAnimation animateIn="fadeIn" duration="1.5" delay="1200">
                            <i className="icon-arrow"></i>
                        </ScrollAnimation>
                    </div>


                    <div className="knowMoreThumbs">
                        <div className="floatText">

                            
                                <h1><ScrollAnimation animateIn="fadeInUp" duration="1.5" delay="0">about us</ScrollAnimation></h1>
                            
                        </div>
                        <ul data-aos="fade-in" data-aos-easing="ease-in-sine" data-aos-duration="1500"  data-aos-delay="600">
                            {imgKnowList}
                        </ul>
                    </div>
                </div>
            </div>
		);
	}	
}