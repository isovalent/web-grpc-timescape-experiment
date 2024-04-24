/* eslint-disable */
// @generated by protobuf-ts 2.9.4 with parameter add_pb_suffix,eslint_disable,ts_nocheck,generate_dependencies,long_type_number,use_proto_field_name
// @generated from protobuf file "timescape/v1/flow.proto" (package "timescape.v1", syntax proto3)
// tslint:disable
// @ts-nocheck
//
// Copyright (C) Isovalent, Inc. - All Rights Reserved.
//
// NOTICE: All information contained herein is, and remains the property of
// Isovalent Inc and its suppliers, if any. The intellectual and technical
// concepts contained herein are proprietary to Isovalent Inc and its suppliers
// and may be covered by U.S. and Foreign Patents, patents in process, and are
// protected by trade secret or copyright law.  Dissemination of this
// information or reproduction of this material is strictly forbidden unless
// prior written permission is obtained from Isovalent Inc.
//
import { ServiceType } from "@protobuf-ts/runtime-rpc";
import type { BinaryWriteOptions } from "@protobuf-ts/runtime";
import type { IBinaryWriter } from "@protobuf-ts/runtime";
import { WireType } from "@protobuf-ts/runtime";
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { IBinaryReader } from "@protobuf-ts/runtime";
import { UnknownFieldHandler } from "@protobuf-ts/runtime";
import type { PartialMessage } from "@protobuf-ts/runtime";
import { reflectionMergePartial } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
import { Aggregation } from "../../aggregation/aggregation_pb";
import { FlowMask } from "./flowmask_pb";
import { Timestamp } from "../../google/protobuf/timestamp_pb";
import { FlowFilter } from "../../flow/flow_pb";
import { TimeFilter } from "./time_filter_pb";
import { Flow } from "../../flow/flow_pb";
/**
 * GetFlowRequest for the GetFlow rpc call.
 *
 * @generated from protobuf message timescape.v1.GetFlowRequest
 */
export interface GetFlowRequest {
    /**
     * id of the flow as seen in the timescape data store
     *
     * @generated from protobuf field: string id = 1;
     */
    id: string;
}
/**
 * GetFlowResponse for the GetFlow rpc call.
 *
 * @generated from protobuf message timescape.v1.GetFlowResponse
 */
export interface GetFlowResponse {
    /**
     * flow information
     *
     * @generated from protobuf field: flow.Flow flow = 1;
     */
    flow?: Flow;
}
/**
 * GetFlowCountRequest for the GetFlowCount rpc call.
 *
 * @generated from protobuf message timescape.v1.GetFlowCountRequest
 */
export interface GetFlowCountRequest {
    /**
     * Limit is the maximum number of results to return.
     *
     * @generated from protobuf field: uint64 limit = 1;
     */
    limit: number;
    /**
     * Since and Until can be used to specify a time interval.
     *
     * @generated from protobuf field: timescape.v1.TimeFilter time_filter = 2;
     */
    time_filter?: TimeFilter;
    /**
     * If the duration window is not provided, the results are not aggregated by window.
     *
     * @generated from protobuf field: uint64 window = 3;
     */
    window: number;
    /**
     * Include are filters that flows must match.
     *
     * @generated from protobuf field: repeated flow.FlowFilter include = 4;
     */
    include: FlowFilter[];
    /**
     * Exclude are filters that flows must not match.
     *
     * @generated from protobuf field: repeated flow.FlowFilter exclude = 5;
     */
    exclude: FlowFilter[];
}
/**
 * FlowCount is the result of a FlowCount operation.
 *
 * @generated from protobuf message timescape.v1.FlowCount
 */
export interface FlowCount {
    /**
     * Start is the time at which the time window starts.
     *
     * @generated from protobuf field: google.protobuf.Timestamp start = 1;
     */
    start?: Timestamp;
    /**
     * Count is the number of flows in the time window.
     *
     * @generated from protobuf field: uint64 count = 2;
     */
    count: number;
}
/**
 * GetFlowCountResponse for the GetFlowCount rpc call.
 *
 * @generated from protobuf message timescape.v1.GetFlowCountResponse
 */
export interface GetFlowCountResponse {
    /**
     * FlowCount returns the number of flows matching the query
     *
     * @generated from protobuf field: timescape.v1.FlowCount flow_count = 1;
     */
    flow_count?: FlowCount;
}
/**
 * GetNamespacesRequest for the GetNamespaces rpc call.
 *
 * @generated from protobuf message timescape.v1.GetNamespacesRequest
 */
export interface GetNamespacesRequest {
    /**
     * Since and Until can be used to specify a time interval.
     *
     * @generated from protobuf field: timescape.v1.TimeFilter time_filter = 1;
     */
    time_filter?: TimeFilter;
}
/**
 * GetNamespacesResponse for the GetNamespaces rpc call.
 *
 * @generated from protobuf message timescape.v1.GetNamespacesResponse
 */
export interface GetNamespacesResponse {
    /**
     * Namespaces list
     *
     * @generated from protobuf field: repeated timescape.v1.Namespace namespaces = 1;
     */
    namespaces: Namespace[];
}
/**
 * Namespace represents a namespace.
 *
 * @generated from protobuf message timescape.v1.Namespace
 */
export interface Namespace {
    /**
     * Name is the name of the namespace.
     *
     * @generated from protobuf field: string name = 1;
     */
    name: string;
    /**
     * Cluster is the cluster of the namespace.
     *
     * @generated from protobuf field: string cluster = 2;
     */
    cluster: string;
}
/**
 * GetFlowsSummaryRequest for the GetFlows rpc call.
 *
 * @generated from protobuf message timescape.v1.GetFlowsSummaryRequest
 */
export interface GetFlowsSummaryRequest {
    /**
     * Limit is the maximum number of results to return. Note that when
     * aggregation is enabled limit is strictly an upper bound: if 10 results are
     * returned when a limit of 100 was requested, there could be more aggregated
     * flows than 10 matching the request. This is currently a limitation of the
     * current implementation needed for performance reasons.
     *
     * @generated from protobuf field: uint64 limit = 1;
     */
    limit: number;
    /**
     * Since and Until can be used to specify a time interval.
     *
     * @generated from protobuf field: timescape.v1.TimeFilter time_filter = 2;
     */
    time_filter?: TimeFilter;
    /**
     * Include are filters that flows must match.
     *
     * @generated from protobuf field: repeated flow.FlowFilter include = 3;
     */
    include: FlowFilter[];
    /**
     * Exclude are filters that flows must not match.
     *
     * @generated from protobuf field: repeated flow.FlowFilter exclude = 4;
     */
    exclude: FlowFilter[];
    /**
     * FlowMask controls which fields to inflate for each Flow in the response.
     *
     * This gives control to the caller for how much information about each flow
     * they would like returned back.
     *
     * Omitting this field from the request will default to populating all fields
     * of a Flow in response.
     *
     * @generated from protobuf field: timescape.v1.FlowMask mask = 5;
     */
    mask?: FlowMask;
    /**
     * Aggregation is an aggregator configuration.
     *
     * @generated from protobuf field: isovalent.flow.aggregation.Aggregation aggregation = 10001;
     */
    aggregation?: Aggregation;
}
/**
 * GetFlowsSummaryResponse for the GetFlows rpc call.
 *
 * @generated from protobuf message timescape.v1.GetFlowsSummaryResponse
 */
export interface GetFlowsSummaryResponse {
    /**
     * Flow matching the request parameters.
     *
     * @generated from protobuf field: timescape.v1.TSFlow flow = 1;
     */
    flow?: TSFlow;
}
/**
 * TSFlow wraps Hubble's flow.Flow definition with additional metadata.
 *
 * @generated from protobuf message timescape.v1.TSFlow
 */
export interface TSFlow {
    /**
     * A unique identifier for the embedded flow.
     *
     * @generated from protobuf field: string id = 1;
     */
    id: string;
    /**
     * Flow as created defined by the Hubble observer.
     *
     * @generated from protobuf field: flow.Flow flow = 2;
     */
    flow?: Flow;
}
// @generated message type with reflection information, may provide speed optimized methods
class GetFlowRequest$Type extends MessageType<GetFlowRequest> {
    constructor() {
        super("timescape.v1.GetFlowRequest", [
            { no: 1, name: "id", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value?: PartialMessage<GetFlowRequest>): GetFlowRequest {
        const message = globalThis.Object.create((this.messagePrototype!));
        message.id = "";
        if (value !== undefined)
            reflectionMergePartial<GetFlowRequest>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: GetFlowRequest): GetFlowRequest {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string id */ 1:
                    message.id = reader.string();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: GetFlowRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* string id = 1; */
        if (message.id !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.id);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message timescape.v1.GetFlowRequest
 */
export const GetFlowRequest = new GetFlowRequest$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GetFlowResponse$Type extends MessageType<GetFlowResponse> {
    constructor() {
        super("timescape.v1.GetFlowResponse", [
            { no: 1, name: "flow", kind: "message", T: () => Flow }
        ]);
    }
    create(value?: PartialMessage<GetFlowResponse>): GetFlowResponse {
        const message = globalThis.Object.create((this.messagePrototype!));
        if (value !== undefined)
            reflectionMergePartial<GetFlowResponse>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: GetFlowResponse): GetFlowResponse {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* flow.Flow flow */ 1:
                    message.flow = Flow.internalBinaryRead(reader, reader.uint32(), options, message.flow);
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: GetFlowResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* flow.Flow flow = 1; */
        if (message.flow)
            Flow.internalBinaryWrite(message.flow, writer.tag(1, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message timescape.v1.GetFlowResponse
 */
export const GetFlowResponse = new GetFlowResponse$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GetFlowCountRequest$Type extends MessageType<GetFlowCountRequest> {
    constructor() {
        super("timescape.v1.GetFlowCountRequest", [
            { no: 1, name: "limit", kind: "scalar", T: 4 /*ScalarType.UINT64*/, L: 2 /*LongType.NUMBER*/ },
            { no: 2, name: "time_filter", kind: "message", localName: "time_filter", T: () => TimeFilter },
            { no: 3, name: "window", kind: "scalar", T: 4 /*ScalarType.UINT64*/, L: 2 /*LongType.NUMBER*/ },
            { no: 4, name: "include", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => FlowFilter },
            { no: 5, name: "exclude", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => FlowFilter }
        ]);
    }
    create(value?: PartialMessage<GetFlowCountRequest>): GetFlowCountRequest {
        const message = globalThis.Object.create((this.messagePrototype!));
        message.limit = 0;
        message.window = 0;
        message.include = [];
        message.exclude = [];
        if (value !== undefined)
            reflectionMergePartial<GetFlowCountRequest>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: GetFlowCountRequest): GetFlowCountRequest {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* uint64 limit */ 1:
                    message.limit = reader.uint64().toNumber();
                    break;
                case /* timescape.v1.TimeFilter time_filter */ 2:
                    message.time_filter = TimeFilter.internalBinaryRead(reader, reader.uint32(), options, message.time_filter);
                    break;
                case /* uint64 window */ 3:
                    message.window = reader.uint64().toNumber();
                    break;
                case /* repeated flow.FlowFilter include */ 4:
                    message.include.push(FlowFilter.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* repeated flow.FlowFilter exclude */ 5:
                    message.exclude.push(FlowFilter.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: GetFlowCountRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* uint64 limit = 1; */
        if (message.limit !== 0)
            writer.tag(1, WireType.Varint).uint64(message.limit);
        /* timescape.v1.TimeFilter time_filter = 2; */
        if (message.time_filter)
            TimeFilter.internalBinaryWrite(message.time_filter, writer.tag(2, WireType.LengthDelimited).fork(), options).join();
        /* uint64 window = 3; */
        if (message.window !== 0)
            writer.tag(3, WireType.Varint).uint64(message.window);
        /* repeated flow.FlowFilter include = 4; */
        for (let i = 0; i < message.include.length; i++)
            FlowFilter.internalBinaryWrite(message.include[i], writer.tag(4, WireType.LengthDelimited).fork(), options).join();
        /* repeated flow.FlowFilter exclude = 5; */
        for (let i = 0; i < message.exclude.length; i++)
            FlowFilter.internalBinaryWrite(message.exclude[i], writer.tag(5, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message timescape.v1.GetFlowCountRequest
 */
export const GetFlowCountRequest = new GetFlowCountRequest$Type();
// @generated message type with reflection information, may provide speed optimized methods
class FlowCount$Type extends MessageType<FlowCount> {
    constructor() {
        super("timescape.v1.FlowCount", [
            { no: 1, name: "start", kind: "message", T: () => Timestamp },
            { no: 2, name: "count", kind: "scalar", T: 4 /*ScalarType.UINT64*/, L: 2 /*LongType.NUMBER*/ }
        ]);
    }
    create(value?: PartialMessage<FlowCount>): FlowCount {
        const message = globalThis.Object.create((this.messagePrototype!));
        message.count = 0;
        if (value !== undefined)
            reflectionMergePartial<FlowCount>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: FlowCount): FlowCount {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* google.protobuf.Timestamp start */ 1:
                    message.start = Timestamp.internalBinaryRead(reader, reader.uint32(), options, message.start);
                    break;
                case /* uint64 count */ 2:
                    message.count = reader.uint64().toNumber();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: FlowCount, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* google.protobuf.Timestamp start = 1; */
        if (message.start)
            Timestamp.internalBinaryWrite(message.start, writer.tag(1, WireType.LengthDelimited).fork(), options).join();
        /* uint64 count = 2; */
        if (message.count !== 0)
            writer.tag(2, WireType.Varint).uint64(message.count);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message timescape.v1.FlowCount
 */
export const FlowCount = new FlowCount$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GetFlowCountResponse$Type extends MessageType<GetFlowCountResponse> {
    constructor() {
        super("timescape.v1.GetFlowCountResponse", [
            { no: 1, name: "flow_count", kind: "message", localName: "flow_count", T: () => FlowCount }
        ]);
    }
    create(value?: PartialMessage<GetFlowCountResponse>): GetFlowCountResponse {
        const message = globalThis.Object.create((this.messagePrototype!));
        if (value !== undefined)
            reflectionMergePartial<GetFlowCountResponse>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: GetFlowCountResponse): GetFlowCountResponse {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* timescape.v1.FlowCount flow_count */ 1:
                    message.flow_count = FlowCount.internalBinaryRead(reader, reader.uint32(), options, message.flow_count);
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: GetFlowCountResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* timescape.v1.FlowCount flow_count = 1; */
        if (message.flow_count)
            FlowCount.internalBinaryWrite(message.flow_count, writer.tag(1, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message timescape.v1.GetFlowCountResponse
 */
export const GetFlowCountResponse = new GetFlowCountResponse$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GetNamespacesRequest$Type extends MessageType<GetNamespacesRequest> {
    constructor() {
        super("timescape.v1.GetNamespacesRequest", [
            { no: 1, name: "time_filter", kind: "message", localName: "time_filter", T: () => TimeFilter }
        ]);
    }
    create(value?: PartialMessage<GetNamespacesRequest>): GetNamespacesRequest {
        const message = globalThis.Object.create((this.messagePrototype!));
        if (value !== undefined)
            reflectionMergePartial<GetNamespacesRequest>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: GetNamespacesRequest): GetNamespacesRequest {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* timescape.v1.TimeFilter time_filter */ 1:
                    message.time_filter = TimeFilter.internalBinaryRead(reader, reader.uint32(), options, message.time_filter);
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: GetNamespacesRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* timescape.v1.TimeFilter time_filter = 1; */
        if (message.time_filter)
            TimeFilter.internalBinaryWrite(message.time_filter, writer.tag(1, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message timescape.v1.GetNamespacesRequest
 */
export const GetNamespacesRequest = new GetNamespacesRequest$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GetNamespacesResponse$Type extends MessageType<GetNamespacesResponse> {
    constructor() {
        super("timescape.v1.GetNamespacesResponse", [
            { no: 1, name: "namespaces", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => Namespace }
        ]);
    }
    create(value?: PartialMessage<GetNamespacesResponse>): GetNamespacesResponse {
        const message = globalThis.Object.create((this.messagePrototype!));
        message.namespaces = [];
        if (value !== undefined)
            reflectionMergePartial<GetNamespacesResponse>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: GetNamespacesResponse): GetNamespacesResponse {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated timescape.v1.Namespace namespaces */ 1:
                    message.namespaces.push(Namespace.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: GetNamespacesResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* repeated timescape.v1.Namespace namespaces = 1; */
        for (let i = 0; i < message.namespaces.length; i++)
            Namespace.internalBinaryWrite(message.namespaces[i], writer.tag(1, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message timescape.v1.GetNamespacesResponse
 */
export const GetNamespacesResponse = new GetNamespacesResponse$Type();
// @generated message type with reflection information, may provide speed optimized methods
class Namespace$Type extends MessageType<Namespace> {
    constructor() {
        super("timescape.v1.Namespace", [
            { no: 1, name: "name", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "cluster", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value?: PartialMessage<Namespace>): Namespace {
        const message = globalThis.Object.create((this.messagePrototype!));
        message.name = "";
        message.cluster = "";
        if (value !== undefined)
            reflectionMergePartial<Namespace>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: Namespace): Namespace {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string name */ 1:
                    message.name = reader.string();
                    break;
                case /* string cluster */ 2:
                    message.cluster = reader.string();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: Namespace, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* string name = 1; */
        if (message.name !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.name);
        /* string cluster = 2; */
        if (message.cluster !== "")
            writer.tag(2, WireType.LengthDelimited).string(message.cluster);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message timescape.v1.Namespace
 */
export const Namespace = new Namespace$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GetFlowsSummaryRequest$Type extends MessageType<GetFlowsSummaryRequest> {
    constructor() {
        super("timescape.v1.GetFlowsSummaryRequest", [
            { no: 1, name: "limit", kind: "scalar", T: 4 /*ScalarType.UINT64*/, L: 2 /*LongType.NUMBER*/ },
            { no: 2, name: "time_filter", kind: "message", localName: "time_filter", T: () => TimeFilter },
            { no: 3, name: "include", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => FlowFilter },
            { no: 4, name: "exclude", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => FlowFilter },
            { no: 5, name: "mask", kind: "message", T: () => FlowMask },
            { no: 10001, name: "aggregation", kind: "message", T: () => Aggregation }
        ]);
    }
    create(value?: PartialMessage<GetFlowsSummaryRequest>): GetFlowsSummaryRequest {
        const message = globalThis.Object.create((this.messagePrototype!));
        message.limit = 0;
        message.include = [];
        message.exclude = [];
        if (value !== undefined)
            reflectionMergePartial<GetFlowsSummaryRequest>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: GetFlowsSummaryRequest): GetFlowsSummaryRequest {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* uint64 limit */ 1:
                    message.limit = reader.uint64().toNumber();
                    break;
                case /* timescape.v1.TimeFilter time_filter */ 2:
                    message.time_filter = TimeFilter.internalBinaryRead(reader, reader.uint32(), options, message.time_filter);
                    break;
                case /* repeated flow.FlowFilter include */ 3:
                    message.include.push(FlowFilter.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* repeated flow.FlowFilter exclude */ 4:
                    message.exclude.push(FlowFilter.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* timescape.v1.FlowMask mask */ 5:
                    message.mask = FlowMask.internalBinaryRead(reader, reader.uint32(), options, message.mask);
                    break;
                case /* isovalent.flow.aggregation.Aggregation aggregation */ 10001:
                    message.aggregation = Aggregation.internalBinaryRead(reader, reader.uint32(), options, message.aggregation);
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: GetFlowsSummaryRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* uint64 limit = 1; */
        if (message.limit !== 0)
            writer.tag(1, WireType.Varint).uint64(message.limit);
        /* timescape.v1.TimeFilter time_filter = 2; */
        if (message.time_filter)
            TimeFilter.internalBinaryWrite(message.time_filter, writer.tag(2, WireType.LengthDelimited).fork(), options).join();
        /* repeated flow.FlowFilter include = 3; */
        for (let i = 0; i < message.include.length; i++)
            FlowFilter.internalBinaryWrite(message.include[i], writer.tag(3, WireType.LengthDelimited).fork(), options).join();
        /* repeated flow.FlowFilter exclude = 4; */
        for (let i = 0; i < message.exclude.length; i++)
            FlowFilter.internalBinaryWrite(message.exclude[i], writer.tag(4, WireType.LengthDelimited).fork(), options).join();
        /* timescape.v1.FlowMask mask = 5; */
        if (message.mask)
            FlowMask.internalBinaryWrite(message.mask, writer.tag(5, WireType.LengthDelimited).fork(), options).join();
        /* isovalent.flow.aggregation.Aggregation aggregation = 10001; */
        if (message.aggregation)
            Aggregation.internalBinaryWrite(message.aggregation, writer.tag(10001, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message timescape.v1.GetFlowsSummaryRequest
 */
export const GetFlowsSummaryRequest = new GetFlowsSummaryRequest$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GetFlowsSummaryResponse$Type extends MessageType<GetFlowsSummaryResponse> {
    constructor() {
        super("timescape.v1.GetFlowsSummaryResponse", [
            { no: 1, name: "flow", kind: "message", T: () => TSFlow }
        ]);
    }
    create(value?: PartialMessage<GetFlowsSummaryResponse>): GetFlowsSummaryResponse {
        const message = globalThis.Object.create((this.messagePrototype!));
        if (value !== undefined)
            reflectionMergePartial<GetFlowsSummaryResponse>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: GetFlowsSummaryResponse): GetFlowsSummaryResponse {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* timescape.v1.TSFlow flow */ 1:
                    message.flow = TSFlow.internalBinaryRead(reader, reader.uint32(), options, message.flow);
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: GetFlowsSummaryResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* timescape.v1.TSFlow flow = 1; */
        if (message.flow)
            TSFlow.internalBinaryWrite(message.flow, writer.tag(1, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message timescape.v1.GetFlowsSummaryResponse
 */
export const GetFlowsSummaryResponse = new GetFlowsSummaryResponse$Type();
// @generated message type with reflection information, may provide speed optimized methods
class TSFlow$Type extends MessageType<TSFlow> {
    constructor() {
        super("timescape.v1.TSFlow", [
            { no: 1, name: "id", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "flow", kind: "message", T: () => Flow }
        ]);
    }
    create(value?: PartialMessage<TSFlow>): TSFlow {
        const message = globalThis.Object.create((this.messagePrototype!));
        message.id = "";
        if (value !== undefined)
            reflectionMergePartial<TSFlow>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: TSFlow): TSFlow {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string id */ 1:
                    message.id = reader.string();
                    break;
                case /* flow.Flow flow */ 2:
                    message.flow = Flow.internalBinaryRead(reader, reader.uint32(), options, message.flow);
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: TSFlow, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* string id = 1; */
        if (message.id !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.id);
        /* flow.Flow flow = 2; */
        if (message.flow)
            Flow.internalBinaryWrite(message.flow, writer.tag(2, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message timescape.v1.TSFlow
 */
export const TSFlow = new TSFlow$Type();
/**
 * @generated ServiceType for protobuf service timescape.v1.FlowService
 */
export const FlowService = new ServiceType("timescape.v1.FlowService", [
    { name: "GetFlow", options: {}, I: GetFlowRequest, O: GetFlowResponse },
    { name: "GetFlowCount", serverStreaming: true, options: {}, I: GetFlowCountRequest, O: GetFlowCountResponse },
    { name: "GetNamespaces", options: {}, I: GetNamespacesRequest, O: GetNamespacesResponse },
    { name: "GetFlowsSummary", serverStreaming: true, options: {}, I: GetFlowsSummaryRequest, O: GetFlowsSummaryResponse }
]);