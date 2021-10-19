import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

export default class TopSection extends React.Component {
	constructor(props) {
		super(props);
 		this.state = {
            items: [],
            mainImg: '',
        };
	}

	componentDidMount() {
		this.apiCall();
        this.mainImageApi();
	}

    apiCall(){
		// let urlHost = window.location.host;
        let urlHost = this.props.apiUrl;
		const url = urlHost+"/items/topbanner";
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

    mainImageApi(){
        // let urlHost = window.location.host;
        let urlHost = this.props.apiUrl;
		const url = urlHost+"/items/mainimage";
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
				mainImg: r.data.mainimagetopsection,
			})
		})
    }

	render() {
		var imageHorizontal = this.state.items.slice(0, 3).map((i)=>{
            return(
                <li role="presentation" key={i.id}>
                    <button className="tablinks">
                        <img src={"http://localhost:8055/assets/"+i.image} alt=""/>
                        <h4>{i.title}</h4>
                    </button>
                </li>
            )
        })

		return (
            <div className="luxurySection">
                <div className="container">
                    <div className="row align-items-center" role="tabpanel">
                        <div className="col-md-6">
                            

                            <div className="luxText" data-aos="fade-in" data-aos-easing="ease-in-sine" data-aos-duration="1500">
                                <ScrollAnimation animateIn="fadeInUp" duration="1.5" delay="0">
                                    <h1>Luxury</h1>
                                </ScrollAnimation>
                                <ScrollAnimation animateIn="fadeInUp" duration="1.5" delay="400">
                                    <h4>is in Each Detail.</h4>
                                </ScrollAnimation>

                                <ScrollAnimation animateIn="fadeIn" duration="1.5" delay="1500">
                                    <p>
                                        Behind each of our projects, there is the strength of our team of experts, 
                                        Capable of mastering a complex environment to make it an accessible
                                        and sustainable architecture, on a human scale.
                                    </p>
                                </ScrollAnimation>

                                
                            </div>
                            <div className="luxThumbs" data-aos="fade-in" data-aos-easing="ease-in-sine" data-aos-duration="1500"  data-aos-delay="400">
                                <ScrollAnimation animateIn="fadeIn" duration="1.5" delay="1600">
                                    <h2>
                                        discover
                                        <span></span>
                                    </h2>
                                </ScrollAnimation>
                                
                                <ScrollAnimation animateIn="fadeInRight" duration="1.5" delay="1800">
                                    <ul className="nav nav-pills" role="tablist" data-aos="fade-left" data-aos-easing="ease-in-sine" data-aos-duration="1500"  data-aos-delay="800">
                                        {imageHorizontal}
                                    </ul>
                                </ScrollAnimation>
                                
                            </div>
                        </div>
                        <div className="col-md-6 text-right">
                            <ScrollAnimation className="luxMainImg" animateIn="fadeIn" duration="1.5" delay="1800">
                                <div className="tabcontent">
                                    <ScrollAnimation className="h-100" animateIn="fadeIn" duration="1.5" delay="2600">
                                        <img data-aos="fade-up-right"
                                        data-aos-easing="ease-in-sine" 
                                        data-aos-duration="1500"  
                                        data-aos-delay="400" 
                                        src={"http://localhost:8055/assets/"+this.state.mainImg} alt=""
                                        />
                                    </ScrollAnimation>
                                    
                                </div>
                            </ScrollAnimation>
                            
                        </div>
                    </div>
                </div>
            </div>
		);
	}	
}