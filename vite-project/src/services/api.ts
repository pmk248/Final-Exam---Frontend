import axios from 'axios';

const API_URL = 'http://localhost:8200/api/analysis/';

export const fetchDeadliestAttackTypes = async () => {
  const response = await axios.get(`${API_URL}/deadliest-attack-types`);
  return response.data;
};

export const fetchHighestCasualtyRegions = async () => {
  const response = await axios.get(`${API_URL}/highest-casualty-regions`);
  return response.data;
};
