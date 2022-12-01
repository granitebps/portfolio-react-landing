export default function handler(req, res) {
  res.status(200).json({
    success: true,
    message: '',
    data: {
      id: 1,
      name: 'Granite Bagas Prakoso Sidjabat',
      username: 'granitebps',
      email: 'granitebagas28@gmail.com',
      created_at: '-000001-11-29T16:52:48.000000Z',
      updated_at: '2020-10-30T18:39:33.000000Z',
      profile: {
        id: 1,
        user_id: 1,
        about:
          "Hai!!! My name is Granite Bagas and I love to code. I'm currently working as Laravel Developer. My focus now is in Laravel as PHP Framework, Node.js as a server-side Javascript Framework, Reactjs as Front End Framework, and React Native as Mobile Development. I have personal and client projects build with Laravel, Node.js, Reactjs, and React Native. My expertise is in back-end programming but I can do web and mobile development. If you want me to make something awesome with Laravel, Node.js, Reactjs, and React Native, you can contact me down below.",
        avatar:
          'https://s3.ap-southeast-1.amazonaws.com/portfolio-granitebps.com/avatar/avatar.jpg',
        phone: '+6281319144618',
        address: 'Jakarta Pusat, DKI Jakarta, Indonesia',
        instagram: 'https://www.instagram.com/granitebps',
        facebook: 'https://www.facebook.com/granitebps',
        twitter: 'https://www.twitter.com/granitbps',
        linkedin: 'https://www.linkedin.com/in/granitebps/',
        github: 'https://www.github.com/granitebps',
        youtube: 'https://www.youtube.com/channel/UCcMqEJTGebhR8RodKMJey7Q',
        created_at: '-000001-11-29T16:52:48.000000Z',
        updated_at: '2021-12-18T19:14:28.000000Z',
        cv: 'https://s3.ap-southeast-1.amazonaws.com/portfolio-granitebps.com/cv/1639854868_cv.pdf',
        nationality: 'Indonesia',
        languages: ['Indonesia', 'English'],
        freelance: true,
        medium: 'https://medium.com/@granitebps',
        birth: 'Mon Jul 07 1997 00:00:00 GMT+0700 (Western Indonesia Time)',
      },
    },
  });
}
