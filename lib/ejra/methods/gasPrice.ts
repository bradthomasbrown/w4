import * as jra from 'https://cdn.jsdelivr.net/gh/bradbrown-llc/jra@0.1.1/mod.ts'
import * as schemas from "../schemas/mod.ts";

export async function gasPrice(rpc: string) {
  const method = "eth_gasPrice";
  const params:never[] = [];
  const schema = schemas.quantity;
  return schema.parse(await new jra.Client(rpc).request(method, params, 0))
}
