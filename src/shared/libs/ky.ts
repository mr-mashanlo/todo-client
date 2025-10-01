import ky from 'ky';

export const kyInstance = ky.create( {
  prefixUrl: '',
  credentials: 'include',
  headers: { 'Content-Type': 'application/json' },
  retry: {
    limit: 1,
    statusCodes: [ 400, 401 ],
    methods: [ 'get', 'post', 'put', 'delete' ]
  }
} );