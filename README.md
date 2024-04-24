# web grpc + timescape

This is a simple example to setup web-grpc with Timescape. To get started:

1. Forward traffic to Timescape in your cluster:

```
kubectl -n hubble-timescape port-forward svc/hubble-timescape 4245:80
```

1. Install [envoy](https://www.envoyproxy.io/)
1. Start it:

```
envoy -c ./envoy.yaml
```

1. Start vite

```
npm run dev
```

Check it out in your browser.

### Notes

The [web-grpc](https://github.com/grpc/grpc-web) project is not well supporting typescript yet. If it comes with a default client, it generates `.js` files and `.d.ts` files that aren't easy consumable.

Instead, I am using here [protobuf-ts](https://github.com/timostamm/protobuf-ts) that generates plain typescript file. It provides a simple implementation to communicate of gRPC in the browsers: @protobuf-ts/grpcweb-transport. (Other options also provided)

To generate proto:

```
npx protoc --proto_path ./proto \
 --ts_out="./proto" \
 --ts_opt add_pb_suffix \
 --ts_opt eslint_disable \
 --ts_opt ts_nocheck \
 --ts_opt generate_dependencies \
 --ts_opt long_type_number \
 --ts_opt use_proto_field_name \
 ./proto/timescape/v1/flow.proto
```
