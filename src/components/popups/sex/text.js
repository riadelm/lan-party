import React from "react";
import './text.css'; // Import the CSS file

const ScrollingText = () => {
  const text = "D’après le dictionnaire Dictionnaires Le Robert, la masturbation est une « pratique qui consiste à provoquer (sur soi-même ou sur un, une partenaire) le plaisir sexuel par des contacts manuels. »1.\
\
  D'après les manuels de sexologie, on peut distinguer plusieurs types de masturbation2,3,4,5 :\
  \
  Les jeux sexuels génitaux, réalisés par les jeunes enfants quand ils sont encore inexpérimentés6 (c’est une phase du développement de l'enfant, comme le déplacement à quatre pattes avant la marche, ou le babillage avant la parole).\
  La masturbation, où, intentionnellement, l’objectif est en général de maximiser le plaisir érotique, puis de provoquer l’orgasme, grâce à des techniques souvent manuelles de stimulations des zones érogènes.\
  L’auto-érotisme, qui englobe toutes les activités physiques et psychologiques qu’une personne utilise sur elle-même pour provoquer son excitation sexuelle et se procurer du plaisir érotique7 (c’est-à-dire la masturbation, mais aussi toutes les autres activités autoérotiques différentes de la masturbation : par exemple, imaginer des fantasmes sexuels, lire une revue érotique ou regarder une vidéo pornographique). En général, la masturbation se pratique simultanément avec d'autres activités auto-érotiques.\
  La masturbation peut être réalisée :\
  \
  Soit seul. Car en général, la masturbation est plutôt considérée comme une activité sexuelle autoérotique (réalisée en solitaire, on parlait autrefois de « plaisir solitaire ») ; elle est présentée de cette manière dans les ouvrages étudiant la sexualité4,3,5.\
  Soit à plusieurs, à deux ou en groupe dans des circonstances où chaque personne stimule ses propres organes génitaux. On parle alors de « masturbation mutuelle » et parfois de masturbation en masse (la littérature cite le cas, publié en 1942, de toute une classe de garçons qui, à plusieurs reprises durant quelques jours se sont tous ouvertement masturbés devant une enseignante, avant de cesser ce comportement à la suite de la visite d'un psychiatre qui a ouvertement discuté avec eux. Selon ce psychiatre, cette dynamique de groupe avait pour origine un élève-leader qui était en opposition avec sa famille et l\'enseignante)\
  Soit réciproquement, à deux ou en groupe, chaque personne manipulant les organes génitaux d'une autre personne. On parle alors de « masturbation réciproque » ou de « masturbation mutuelle », activité sexuelle qui n'est plus de l'autoérotisme. La « masturbation réciproque » est une extension du sens général, par analogie avec la manipulation autoérotique                                الاستمناء أَو العادة السرية وكانت تُعرف في الجاهليَّة باسم جَلْدِ عُمَيْرَة هي عملية استثارة جنسية عند الثدييات تتم في العادة باستثارة الأعضاء الجنسية بهدف الوصول إلى النشوة الجنسية وهي ليست بديلاً عن العملية الجنسية. تنتشر العادة السرية بنسبة كبيرة لدى الإنسان وتتم بتحريك وحك الشفرات والبظر من الخارج أو إدخال أجسام داخل المهبل بالنسبة للإناث، وحك القضيب بالنسبة للذكور. والعادة السرية تتم عادةً باستخدام اليد كما هو الحال في الأسود والقردة. وقد يتم استعمال وسائل آلية أخرى كما هو الوضع عند الإنسان. وعادة ما يكون الاستمناء ذاتياً وإن كانت بعض أشكاله تتم عبر علاقات تبادلية يقوم بها كل فرد بدور يد المستمني، وهو ما يُطلق عليه الاستمناء المتبادل.";

  return (
    <div className="scrolling-text-container">
      <div className="scrolling-text">
        {text}
      </div>
    </div>
  );
};

export default ScrollingText;
