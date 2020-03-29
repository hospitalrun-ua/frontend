import Papa from 'papaparse';

const requests = [
  {
    description_ua: 'Термометр клінічний інфрачервоний ручний',
    quantity: 300,
    category_ua: 'Діагностика',
  },
  {
    description_ua: 'Мішки для біологічно небезпечних відходів, 50 л, коробка/100 шт.',
    quantity: 100,
    category_ua: 'Утилізація',
  },
  {
    description_ua: 'Апарат штучної вентиляції легень, медичний, для дорослих та дітей, з доступом',
    quantity: 30,
    category_ua: 'Вентиляція',
  },
  {
    description_ua: 'Костюм захисний, CatIII, тип 6b, L-XL',
    quantity: 149,
    category_ua: 'ЗІЗ',
  },
  {
    description_ua: 'Пульсоксиметр пальчиковий з аксесуарами',
    quantity: 50,
    category_ua: 'Моніторинг',
  },
  {
    description_ua: 'Стерилізатор паровий, 20 л, електричний, з доступом',
    quantity: 200,
    category_ua: 'Лікування',
  },
  {
    description_ua: 'Інтубаційна трубка, розмір 00, стерильна, одноразового використання',
    quantity: 220,
    category_ua: 'Вентиляція',
  },
];

const getRandomRequests = (requestsCount) => {
  requests.sort(() => 0.5 - Math.random());
  return requests.slice(0, requestsCount);
};

const compareHospitals = (a, b) => (a.division_name.toLowerCase() > b.division_name.toLowerCase() ? 1 : -1);

const isHospitalValid = (hospital) => hospital.division_name;

const populateWithRequests = (hospital, index) => ({
  ...hospital,
  requests: getRandomRequests(index % 6),
});

export default function fetchHospitalInfo() {
  return new Promise((resolve, reject) => {
    Papa.parse(
      'https://raw.githubusercontent.com/hospitalrun-ua/Hospital-Dashboard/master/src/pmd_all_contracted_legal_entities.csv',
      {
        download: true,
        header: true,
        complete(results) {
          const hospitals = results.data
            .filter(isHospitalValid)
            .map(populateWithRequests);
          hospitals.sort(compareHospitals);
          resolve(hospitals);
        },
        error(err) {
          reject(err);
        },
      },
    );
  });
}
