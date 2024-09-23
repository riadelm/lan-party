import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import "./SuicidePage.css";
import HomeIcon from './popups/homebtn/home';
import shpfp1 from "../assets/death/self harm 3.jpg";
import shpfp6 from "../assets/death/self harm 6.jpg";


const SuicidePage = () => {

    useEffect(() => {
        // Scroll to top of the page when component is mounted
        window.scrollTo(0, 0);
    }, []);

    const navigate = useNavigate();

    const navigateTo = (path) => {
        navigate(path); 
    };

    const entriesData = [
        {
            date: '16 Feb 2010',
            content: 'Not hugged enough as a kid so the razor feels like love to me now',
        },
        {
            imgSrc: shpfp1,
            date: '12 Feb 2010',
            content: 'Я не хочу больше жить на этой земле',
        },
        {
            date: '09 Feb 2010',
            content: 'لا أستطيع أن أقتل نفسي لأن أمي لن تكون قادرة على الاستمرار في الحياة بعد ذلك، لذا فإن الألم هو الشيء الوحيد الذي يجعلني قريبًا من السيطرة على الموت',
        },
        {
            date: '08 Feb 2010',
            content: 'Beznadějná, nemilovaná, bezcenná, tlustá, ošklivá, zbytečná, děvka',
        },
        {
            date: '27 Jan 2010',
            content: 'Fuckfuckfuckfuck my mom saw my cuts and asked what they were and I lied that they were my friends’ cat but my friend doesn’t have a cat',
        },
        {
            date: '21 Jan 2010',
            content: 'This forum is fucked. Этот форум в жопе, все здесь неуязвимы, я в том числе',
        },
        {
            imgSrc: shpfp6,
            date: '16 Jan 2010',
            content: 'I want to die, its the only thing I can think about. Any scrap of love or goodness in my life gets taken away faster than it ever takes to come into my life, its not enough comfort to keep me wanting to live, the pain is so much greater than the joy, and if the rest of my life will just be spent feeling like this, I’d rather not wait around to endure it.',
        },

    ]

    return (
        <div className="sh-container">
            <HomeIcon />
            <div className="sh-table-content">
                <table>
                    {entriesData.map((data, index) => (
                        <tr key={index}>
                            {/* <th scope="row" className="sh-image-col">
                                <figure>
                                    <img src={data.imgSrc} />
                                </figure>
                            </th> */}
                            <th scope="row" className="sh-date-col">
                                <figure>
                                    <p className="sh-date">{data.date}</p>
                                </figure>
                            </th>
                            <td className="sh-content-col">
                                <p className="sh-content">{data.content}</p>
                                {data.imgSrc && (
                                    <figure>
                                        <img onClick={() => navigateTo('/gore')} className="sh-image" src={data.imgSrc} alt="Content Image" />
                                    </figure>
                                )}
                            </td>
                        </tr>
                    ))}
                </table>
                <div className="pagination-bar">
                    <button 
                    className="pagination-button"
                    onClick={() => navigateTo('/death')}
                    >
                        Previous &lt;&lt;
                    </button>

                    {/* Display current page numbers */}
                    <span className="pagination-pages">
                    <span className="pagination-number"onClick={() => navigateTo('/suicide')}>[1]</span>
                    <span className="pagination-dots" onClick={() => navigateTo('/gore')}>....</span>
                    <span className="pagination-number" onClick={() => navigateTo('/gore')}>[48]</span>
                    </span>

                    <button 
                    className="pagination-button"
                    onClick={() => navigateTo('/gore')}
                    >
                        Next &gt;&gt;
                    </button>
                </div>
            </div>
        </div>
    );
};
    
export default SuicidePage;