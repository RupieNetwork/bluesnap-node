import * as querystring from 'querystring';
import HttpClient from '../http/HttpClient';
import ErrorResponse from '../errors/models/ErrorResponse';

export default class RefundGateway {
    private http: HttpClient;

    public constructor(http: HttpClient) {
        this.http = http;
    }

    public async refund(transactionId: string, params?: RefundQueryParams): Promise<void | ErrorResponse> {
        const queryParams = querystring.stringify(params);
        const path = `/services/2/transaction/${transactionId}/refund?${queryParams}`;
        return this.http.put(path);
    }
}

type RefundQueryParams = {
    amount?: number;
    reason?: string;
    cancelsubscriptions?: boolean;
} & {
    [key: string]: number; // Dynamic key for vendor, formatted as: vendor.${vendorId}.amount
}
