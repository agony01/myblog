export default async (req, res) => {
  const data = [
    {
      id: 1,
      image: "https://media.discordapp.net/attachments/904763470623428738/1015932314615824424/sake-black-death-smile-wallpaper-preview.jpg",
      name: "DDoS music bot",
      description:
        "Kendi discord sunucunuzda kullana bileceğiniz türkçe ve ingilizce dil destekli mükemmel müzik botu.",
      link: "https://discord.com/oauth2/authorize?client_id=746109878149447771&permissions=8&scope=bot",
    },
  ];
  res.status(200).json(data);
};
