import HttpClient from '../../../http/HttpClient';
import AltTransactionSepaDdRequest from './models/altTransactionSepaDirectDebit/AltTransactionSepaDdRequest';
import AltTransactionSepaDdResponse from './models/altTransactionSepaDirectDebit/AltTransactionSepaDdResponse';

export default class SepaDdTransactionGatewayTransactionGateway {
    private http: HttpClient;

    public constructor(http: HttpClient) {
        this.http = http;
    }

    public async create(altTransaction: AltTransactionSepaDdRequest): Promise<AltTransactionSepaDdResponse> {
        const path = `/services/2/alt-transactions`;
        const body = altTransaction;
        return await this.http.post(path, body);
    }

    public async get(transactionId: string): Promise<AltTransactionSepaDdResponse> {
        const path = `/services/2/alt-transactions/${transactionId}`;
        return await this.http.get(path);
    }
}