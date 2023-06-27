export default async (req, res) => {
  const data = [
    {
      id: 1,
      image: "https://cdn.discordapp.com/attachments/937770732295975033/1123259147056582727/g-letter-with-abstract-glitch-effect-vector.jpg",
      name: "DDoS music bot",
      description:
        "Çeşitli eğlencelerle dolu Discord sunucumuza hepinizi davet ediyoruz!",
      link: "https://discord.gg/BnbasZ269c",
    },
  ];
  res.status(200).json(data);
};
