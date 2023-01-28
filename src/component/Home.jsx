function Home(){
    return (
        <>
            <h1 className="main-header">Intuitive Website Developer</h1>
            <div className="parag">
                <p className='main-parag'>
                My name is Alemayehu Mekonen. I am a highly skilled and experienced web developer from Ethiopia. With a Bachelor's degree in Computer Science, I am a deep understanding of programming concepts and an ability to apply them to my work as a web developer. I am well-versed in various web development technologies, including HTML, CSS, JavaScript, and more, which enables me to create and maintain websites and web-based applications with ease.
                </p>
                <p className='main-parag'>
                One of the things that sets me apart from other web developers is my focus on creating intuitive web solutions. I understands that user experience is key, and I puts a lot of effort into making sure that the websites I develops are easy to navigate, visually appealing, and provide a seamless experience for the user. Whether it's a simple brochure website or a complex web application, My goal is to create something that is not only functional but also intuitive and easy to use.
                </p>
                <p className='main-parag'>
                In addition to my technical skills, I am also a strong communicator and a team player. Am able to work well with clients, designers, and other developers to make sure that the final product meets their needs and exceeds their expectations. Am also a quick learner, always eager to learn new technologies and skills to stay ahead of the curve.
                </p>
                <p className='main-parag'>
                Whether you're in need of a new website for your business or an experienced web developer for your team, am here, to help you. With my technical expertise and focus on creating intuitive web solutions, am sure to deliver a website that exceeds your expectations.   
                </p>
            </div>
            <HomeLinks/>
            <hr />  
            <div className="footer-bar"></div>
        </>
    )
}

 function HomeLinks(){
     return (
        <div className="home-links">
            <ul className='link-container'>
           <li><a href="https://instagram.com/alexundertwod/" className="link-item"><i className="fa fa-instagram"></i></a></li>
           <li><a href="https://github.com/afteralexxo/" className="link-item"><i className="fa fa-github"></i></a></li>
           <li><a href="https://twitter.com/creativetwod/" className="link-item"><i className="fa fa-twitter"></i></a></li>
           <li><a href="https://facebook.com/100037514192921/" className="link-item"><i className="fa fa-facebook"></i></a></li>
            </ul>
        </div>
    )
}

export default Home