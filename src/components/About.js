export const About = () => {
    return (
        <section id="about">
            <h1 class="title">About Me</h1>
            <div class="section-container">
                <div class="about-details-container">
                    <div class="about-containers">
                        <div class="details-container">
                            <img
                                src={require('../assets/education.png')}
                                alt="Experience icon"
                                class="icon"
                            />
                            <h3>Education</h3>
                            <p>Bachelors of Science Honours, Major in Computer Science</p>
                        </div>
                        <div class="details-container">
                            <img
                                src={require('../assets/skills.png')}
                                alt="Education icon"
                                class="icon"
                            />
                            <h3>Top Skills</h3>
                            <div class="article-container">
                                <article>
                                    <img
                                        src="./assets/checkmark.png"
                                        alt="Experience icon"
                                        class="icon"
                                    />
                                    <div>
                                        <h3>HTML</h3>
                                        <p>Experienced</p>
                                    </div>
                                </article>
                            </div>
                        </div>
                    </div>
                    <div class="text-container">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quis
                            reprehenderit et laborum, rem, dolore eum quod voluptate
                            exercitationem nobis, nihil esse debitis maxime facere minus sint
                            delectus velit in eos quo officiis explicabo deleniti dignissimos.
                            Eligendi illum libero dolorum cum laboriosam corrupti quidem,
                            reiciendis ea magnam? Nulla, impedit fuga!
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};