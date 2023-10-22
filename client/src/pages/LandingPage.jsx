import styled from "styled-components";

const LandingPage = () => {
    return (
        <Wrapper>
            <div className="content">
                <div className="first-page">
                    <h1 className="name">Fernando Fugihara</h1>
                    <p className="line">
                        I build interactive websites that run 
                        across plataforms and devices
                    </p>
                </div>
        
            </div>
        </Wrapper>
    );
};

export default LandingPage;

const Wrapper = styled.div`
    .content {
        display: flex;
        height: 100vh;
        align-items: center;
        justify-content: center;
    }
    .firstpage {

    }
    .name {
        text-align: center;
        margin-bottom: 1rem;
    }


`;