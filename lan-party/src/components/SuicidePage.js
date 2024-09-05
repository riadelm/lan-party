import React from 'react';
import "./SuicidePage.css";
import background from "../assets/death/suicideroom.jpg"
import shpfp1 from "../assets/death/self harm 3.jpg";
import shpfp2 from "../assets/death/self harm 1.jpg";
import shpfp3 from "../assets/death/self harm 2.jpeg";
import shpfp4 from "../assets/death/self harm 3.jpg";
import shpfp5 from "../assets/death/emptysh.png";
import shpfp6 from "../assets/death/self harm 6.jpg";
import shpfp7 from "../assets/death/self harm 9.jpg";

const SuicidePage = () => {

    const entriesData = [
        {
            imgSrc: shpfp1,
            date: '16 Feb 2010',
            content: 'Not hugged enough as a kid so the razor feels like love to me now',
        },
        {
            imgSrc: shpfp2,
            date: '12 Feb 2010',
            content: 'Я не хочу больше жить на этой земле',
        },
        {
            imgSrc: shpfp3,
            date: '09 Feb 2010',
            content: 'لا أستطيع أن أقتل نفسي لأن أمي لن تكون قادرة على الاستمرار في الحياة بعد ذلك، لذا فإن الألم هو الشيء الوحيد الذي يجعلني قريبًا من السيطرة على الموت',
        },
        {
            imgSrc: shpfp4,
            date: '08 Feb 2010',
            content: 'Beznadějná, nemilovaná, bezcenná, tlustá, ošklivá, zbytečná, děvka',
        },
        {
            imgSrc: shpfp5,
            date: '27 Jan 2010',
            content: 'Fuckfuckfuckfuck my mom saw my cuts and asked what they were and I lied that they were my friends’ cat but my friend doesn’t have a cat',
        },
        {
            imgSrc: shpfp6,
            date: '21 Jan 2010',
            content: 'This forum is fucked. Этот форум в жопе, все здесь неуязвимы, я в том числе',
        },
        {
            imgSrc: shpfp7,
            date: '16 Jan 2010',
            content: 'I want to die, its the only thing I can think about. Any scrap of love or goodness in my life gets taken away faster than it ever takes to come into my life, its not enough comfort to keep me wanting to live, the pain is so much greater than the joy, and if the rest of my life will just be spent feeling like this, I’d rather not wait around to endure it.',
        },

    ]

    return (
        <div className="sh-container">
            <div className="sh-table-content">
                <table>
                    {entriesData.map((data, index) => (
                        <tr key={index}>
                            <th scope="row" className="sh-image-col">
                                <figure>
                                    <img src={data.imgSrc} />
                                </figure>
                            </th>
                            <th scope="row" className="sh-date-col">
                                <figure>
                                    <p className="sh-date">{data.date}</p>
                                </figure>
                            </th>
                            <td className="sh-content-col">
                                <p className="sh-content">{data.content}</p>
                            </td>
                        </tr>
                    ))}
                </table>
            </div>
        </div>
    );
};
    
export default SuicidePage;