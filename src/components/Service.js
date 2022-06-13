import React from 'react';


const Service = () => {
    return (
        <div>
            <p data-aos="fade-up"
                data-aos-duration="1000" className='text-center text-3xl text-primary font-bold uppercase mt-10'>Services</p>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 m-10'>
                <div data-aos="fade-up"
                    data-aos-duration="1000" className="card  max-w-[320px] mx-auto bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <div className="avatar">
                            <div className="w-32 mask mask-hexagon bg-primary">
                                <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="7em" height="7em" preserveAspectRatio="xMidYMid meet" viewBox="-4 0 28 20"><path fill="white" d="M12 4C6.486 4 2 8.486 2 14a9.89 9.89 0 0 0 1.051 4.445c.17.34.516.555.895.555h16.107c.379 0 .726-.215.896-.555A9.89 9.89 0 0 0 22 14c0-5.514-4.486-10-10-10zm7.41 13H4.59A7.875 7.875 0 0 1 4 14c0-4.411 3.589-8 8-8s8 3.589 8 8a7.875 7.875 0 0 1-.59 3z" /><path fill="white" d="M10.939 12.939a1.53 1.53 0 0 0 0 2.561a1.53 1.53 0 0 0 2.121-.44l3.962-6.038a.034.034 0 0 0 0-.035a.033.033 0 0 0-.045-.01l-6.038 3.962z" /></svg>
                            </div>
                        </div>
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title text-2xl">Fast</h2>
                        <p>Fast load times and lag free interaction, my highest priority.</p>

                    </div>
                </div>
                <div data-aos="fade-up"
                    data-aos-duration="1000" className="card  max-w-[320px] mx-auto bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <div className="avatar">
                            <div className="w-32 mask mask-hexagon bg-primary">
                                <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="7em" height="7em" preserveAspectRatio="xMidYMid meet" viewBox="-4 0 28 18"><path fill="white" d="M9 20h6v2H9zm7.906-6.288C17.936 12.506 19 11.259 19 9c0-3.859-3.141-7-7-7S5 5.141 5 9c0 2.285 1.067 3.528 2.101 4.73c.358.418.729.851 1.084 1.349c.144.206.38.996.591 1.921H8v2h8v-2h-.774c.213-.927.45-1.719.593-1.925c.352-.503.726-.94 1.087-1.363zm-2.724.213c-.434.617-.796 2.075-1.006 3.075h-2.351c-.209-1.002-.572-2.463-1.011-3.08a20.502 20.502 0 0 0-1.196-1.492C7.644 11.294 7 10.544 7 9c0-2.757 2.243-5 5-5s5 2.243 5 5c0 1.521-.643 2.274-1.615 3.413c-.373.438-.796.933-1.203 1.512z" /></svg>
                            </div>
                        </div>
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title text-2xl">Intuitive</h2>
                        <p>Strong preference for easy to use, intuitive UX/UI.</p>

                    </div>
                </div>
                <div data-aos="fade-up"
                    data-aos-duration="1000" className="card  max-w-[320px] mx-auto bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <div className="avatar">
                            <div className="w-32 mask mask-hexagon bg-primary">
                                <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="7em" height="7em" preserveAspectRatio="xMidYMid meet" viewBox="-4 0 28 18"><path fill="white" d="M20 3H7c-1.103 0-2 .897-2 2v2H4c-1.103 0-2 .897-2 2v10c0 1.103.897 2 2 2h6c1.103 0 2-.897 2-2h8c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2zM9.997 19H4V9h6l-.003 10zm10-2H12V9c0-1.103-.897-2-2-2H7V5h13l-.003 12z" /></svg>
                            </div>
                        </div>
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title text-2xl">Responsive</h2>
                        <p>My layouts will work on any device, big or small.</p>

                    </div>
                </div>
                <div data-aos="fade-up"
                    data-aos-duration="1000" className="card  max-w-[320px] mx-auto bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <div className="avatar">
                            <div className="w-32 mask mask-hexagon bg-primary">
                                <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="7em" height="7em" preserveAspectRatio="xMidYMid meet" viewBox="-5 0 30 18"><path fill="white" d="M20.92 2.38A15.72 15.72 0 0 0 17.5 2a8.26 8.26 0 0 0-6 2.06Q9.89 5.67 8.31 7.27c-1.21-.13-4.08-.2-6 1.74a1 1 0 0 0 0 1.41l11.3 11.32a1 1 0 0 0 1.41 0c1.95-2 1.89-4.82 1.77-6l3.21-3.2c3.19-3.19 1.74-9.18 1.68-9.43a1 1 0 0 0-.76-.73zm-2.36 8.75L15 14.67a1 1 0 0 0-.27.9a6.81 6.81 0 0 1-.54 3.94L4.52 9.82a6.67 6.67 0 0 1 4-.5A1 1 0 0 0 9.39 9s1.4-1.45 3.51-3.56A6.61 6.61 0 0 1 17.5 4a14.51 14.51 0 0 1 2.33.2c.24 1.43.62 5.04-1.27 6.93z" /><circle cx="15.73" cy="8.3" r="2" fill="white" /><path fill="white" d="M5 16c-2 1-2 5-2 5a7.81 7.81 0 0 0 5-2z" /></svg>
                            </div>
                        </div>
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title text-2xl">Dynamic</h2>
                        <p>Websites don't have to be static, I love making pages come to life.</p>

                    </div>
                </div>

            </div>
        </div>
    );
};

export default Service;