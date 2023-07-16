import React from 'react';
import styled from 'styled-components';

const Colum = () => {
    return(
        <Wrapper>
            <div className="Grid Grid-column-Three">
                <div className="first-column border">
                    <h3>Welcome to</h3>
                </div>
                <div className="second-column border " >
                    <div className="Flex"><p className='fle1'>cotact us</p>
                    <p>About us</p>
                    </div>
                </div>
                <div className="third-column border">review</div>

            </div>
        </Wrapper>

    );
};

const Wrapper = styled.section`
.Grid{
    margin-left:20%;
    margin-right:20%; 
    display:grid;
    gap :2rem;
}
.Grid-column-Three{
    grid-template-columns: repeat(3, 1fr);
}
.border{
    border:2px solid black;
}
.first-column{
    font-size:3rem;
}
.second-column{
    font-size:1rem;
}
.third-column{
    font-size:2rem;
}
.Flex{
    display: inline-block;
}
.fle1{
    padding-bottom:4rem;
}

`; 

export default Colum;