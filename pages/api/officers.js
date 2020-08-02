export default async (req, res) => {
  try {
    const officers = [
      {
        officerId: '1',
        officerName: 'Bimothy Ban',
        officerImg:
          'https://preview.keenthemes.com/metronic-v4/theme/assets/pages/media/profile/people19.png',
        roleName: 'Example Role',
        exec: true,
      },
      {
        officerId: '2',
        officerName: 'Bimothy Ban',
        officerImg:
          'https://preview.keenthemes.com/metronic-v4/theme/assets/pages/media/profile/people19.png',
        roleName: 'Exec role',
        exec: false,
      },
      {
        officerId: '3',
        officerName: 'Bimothy Ban',
        officerImg:
          'https://preview.keenthemes.com/metronic-v4/theme/assets/pages/media/profile/people19.png',
        roleName: 'Historian',
        exec: false,
      },
      {
        officerId: '4',
        officerName: 'Bimothy Ban',
        officerImg:
          'https://preview.keenthemes.com/metronic-v4/theme/assets/pages/media/profile/people19.png',
        roleName: 'Culture',
        exec: false,
      },
    ];

    res.statusCode = 200;
    res.json(officers);
  } catch (err) {
    res.statusCode = 200;
    res.json({ err: err });
  }
};
