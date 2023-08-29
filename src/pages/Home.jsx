import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import logoStyle from '../utils/logo_style';

const Home = () => {
    const  {header, footer} = logoStyle
    return (
        <div style={{backgroundColor:"tomato", height:"100vh", width:"100%",  paddingTop:"5vw"}}>
            <Header logoStyle={header}/>
            <p style={{width:"900px", margin:"0 auto"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat vel expedita hic suscipit vitae dolorem totam ipsam, ex, eligendi fuga in quidem beatae quas atque aliquam deserunt molestias repudiandae voluptatem eaque. Exercitationem sunt, quis ex eius, pariatur earum voluptas quas deserunt reiciendis voluptatibus at? Eaque nostrum magni nesciunt! Doloremque eum aperiam error deleniti sit, nihil eos omnis eaque inventore quo, voluptatem dolore blanditiis totam nesciunt. Illo consectetur dolore debitis in sunt quaerat, voluptates architecto eos nisi iste, impedit corporis sequi? Sequi minus quisquam architecto unde, eos eaque doloribus vitae voluptate veniam. Nesciunt odio porro vel saepe labore itaque aut, voluptate, natus reiciendis aliquid praesentium commodi aperiam, iusto suscipit rem consectetur obcaecati a eos quae ullam. Corporis, eos itaque recusandae officia alias, hic quo at consequatur perferendis quas consectetur dolores possimus placeat, ex sed veritatis nostrum quisquam doloremque! Sequi, quod nemo reiciendis facilis vel fugit delectus id? Quo, minus at nemo eum, impedit exercitationem magnam autem perspiciatis alias aut, tempora rerum illum animi distinctio! Iure reprehenderit quas fugit maxime aspernatur excepturi, officia eius possimus dicta nostrum unde facilis, deleniti cupiditate laborum optio provident blanditiis? In iusto, quibusdam facilis officiis, sed distinctio modi dolores odit recusandae aut fugit. Sint fugiat ea ipsum numquam cum, nisi quisquam libero minima quibusdam dolorum consequuntur tempora blanditiis ut aperiam natus eos odit! Aspernatur non ab, enim optio quae nisi explicabo consectetur corrupti error et adipisci odio facilis dicta nihil ullam, iste excepturi recusandae mollitia sint at fugiat cumque eligendi.</p>
            <Footer logoStyle={footer}/>
        </div>
    );
}

export default Home;
