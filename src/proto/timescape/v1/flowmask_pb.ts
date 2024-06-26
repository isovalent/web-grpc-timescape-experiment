/* eslint-disable */
// @generated by protobuf-ts 2.9.4 with parameter add_pb_suffix,eslint_disable,ts_nocheck,generate_dependencies,long_type_number,use_proto_field_name
// @generated from protobuf file "timescape/v1/flowmask.proto" (package "timescape.v1", syntax proto3)
// tslint:disable
// @ts-nocheck
//
// DO NOT EDIT!!!
//
//
// This file is auto-generated based on the cilium/cilium/api/v1/flow.Flow
// definition.
//
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
import type { BinaryWriteOptions } from "@protobuf-ts/runtime";
import type { IBinaryWriter } from "@protobuf-ts/runtime";
import { WireType } from "@protobuf-ts/runtime";
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { IBinaryReader } from "@protobuf-ts/runtime";
import { UnknownFieldHandler } from "@protobuf-ts/runtime";
import type { PartialMessage } from "@protobuf-ts/runtime";
import { reflectionMergePartial } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
/**
 * @generated from protobuf message timescape.v1.FlowMask
 */
export interface FlowMask {
    /**
     * @generated from protobuf field: bool uuid = 34;
     */
    uuid: boolean;
    /**
     * @generated from protobuf field: bool verdict = 2;
     */
    verdict: boolean;
    /**
     * @generated from protobuf field: bool drop_reason = 3;
     */
    drop_reason: boolean;
    /**
     * @generated from protobuf field: bool auth_type = 35;
     */
    auth_type: boolean;
    /**
     * @generated from protobuf field: bool ethernet = 4;
     */
    ethernet: boolean;
    /**
     * @generated from protobuf field: bool IP = 5 [json_name = "IP"];
     */
    IP: boolean;
    /**
     * @generated from protobuf field: bool l4 = 6;
     */
    l4: boolean;
    /**
     * @generated from protobuf field: bool source = 8;
     */
    source: boolean;
    /**
     * @generated from protobuf field: bool destination = 9;
     */
    destination: boolean;
    /**
     * @generated from protobuf field: bool Type = 10 [json_name = "Type"];
     */
    Type: boolean;
    /**
     * @generated from protobuf field: bool node_name = 11;
     */
    node_name: boolean;
    /**
     * @generated from protobuf field: bool source_names = 13;
     */
    source_names: boolean;
    /**
     * @generated from protobuf field: bool destination_names = 14;
     */
    destination_names: boolean;
    /**
     * @generated from protobuf field: bool l7 = 15;
     */
    l7: boolean;
    /**
     * @generated from protobuf field: bool reply = 16;
     */
    reply: boolean;
    /**
     * @generated from protobuf field: bool event_type = 19;
     */
    event_type: boolean;
    /**
     * @generated from protobuf field: bool source_service = 20;
     */
    source_service: boolean;
    /**
     * @generated from protobuf field: bool destination_service = 21;
     */
    destination_service: boolean;
    /**
     * @generated from protobuf field: bool traffic_direction = 22;
     */
    traffic_direction: boolean;
    /**
     * @generated from protobuf field: bool policy_match_type = 23;
     */
    policy_match_type: boolean;
    /**
     * @generated from protobuf field: bool trace_observation_point = 24;
     */
    trace_observation_point: boolean;
    /**
     * @generated from protobuf field: bool drop_reason_desc = 25;
     */
    drop_reason_desc: boolean;
    /**
     * @generated from protobuf field: bool is_reply = 26;
     */
    is_reply: boolean;
    /**
     * @generated from protobuf field: bool debug_capture_point = 27;
     */
    debug_capture_point: boolean;
    /**
     * @generated from protobuf field: bool interface = 28;
     */
    interface: boolean;
    /**
     * @generated from protobuf field: bool proxy_port = 29;
     */
    proxy_port: boolean;
    /**
     * @generated from protobuf field: bool trace_context = 30;
     */
    trace_context: boolean;
    /**
     * @generated from protobuf field: bool sock_xlate_point = 31;
     */
    sock_xlate_point: boolean;
    /**
     * @generated from protobuf field: bool socket_cookie = 32;
     */
    socket_cookie: boolean;
    /**
     * @generated from protobuf field: bool cgroup_id = 33;
     */
    cgroup_id: boolean;
    /**
     * @generated from protobuf field: bool Summary = 100000 [json_name = "Summary"];
     */
    Summary: boolean;
    /**
     * @generated from protobuf field: bool extensions = 150000;
     */
    extensions: boolean;
    /**
     * @generated from protobuf field: bool egress_allowed_by = 21001;
     */
    egress_allowed_by: boolean;
    /**
     * @generated from protobuf field: bool ingress_allowed_by = 21002;
     */
    ingress_allowed_by: boolean;
}
// @generated message type with reflection information, may provide speed optimized methods
class FlowMask$Type extends MessageType<FlowMask> {
    constructor() {
        super("timescape.v1.FlowMask", [
            { no: 34, name: "uuid", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 2, name: "verdict", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 3, name: "drop_reason", kind: "scalar", localName: "drop_reason", T: 8 /*ScalarType.BOOL*/ },
            { no: 35, name: "auth_type", kind: "scalar", localName: "auth_type", T: 8 /*ScalarType.BOOL*/ },
            { no: 4, name: "ethernet", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 5, name: "IP", kind: "scalar", localName: "IP", jsonName: "IP", T: 8 /*ScalarType.BOOL*/ },
            { no: 6, name: "l4", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 8, name: "source", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 9, name: "destination", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 10, name: "Type", kind: "scalar", localName: "Type", jsonName: "Type", T: 8 /*ScalarType.BOOL*/ },
            { no: 11, name: "node_name", kind: "scalar", localName: "node_name", T: 8 /*ScalarType.BOOL*/ },
            { no: 13, name: "source_names", kind: "scalar", localName: "source_names", T: 8 /*ScalarType.BOOL*/ },
            { no: 14, name: "destination_names", kind: "scalar", localName: "destination_names", T: 8 /*ScalarType.BOOL*/ },
            { no: 15, name: "l7", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 16, name: "reply", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 19, name: "event_type", kind: "scalar", localName: "event_type", T: 8 /*ScalarType.BOOL*/ },
            { no: 20, name: "source_service", kind: "scalar", localName: "source_service", T: 8 /*ScalarType.BOOL*/ },
            { no: 21, name: "destination_service", kind: "scalar", localName: "destination_service", T: 8 /*ScalarType.BOOL*/ },
            { no: 22, name: "traffic_direction", kind: "scalar", localName: "traffic_direction", T: 8 /*ScalarType.BOOL*/ },
            { no: 23, name: "policy_match_type", kind: "scalar", localName: "policy_match_type", T: 8 /*ScalarType.BOOL*/ },
            { no: 24, name: "trace_observation_point", kind: "scalar", localName: "trace_observation_point", T: 8 /*ScalarType.BOOL*/ },
            { no: 25, name: "drop_reason_desc", kind: "scalar", localName: "drop_reason_desc", T: 8 /*ScalarType.BOOL*/ },
            { no: 26, name: "is_reply", kind: "scalar", localName: "is_reply", T: 8 /*ScalarType.BOOL*/ },
            { no: 27, name: "debug_capture_point", kind: "scalar", localName: "debug_capture_point", T: 8 /*ScalarType.BOOL*/ },
            { no: 28, name: "interface", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 29, name: "proxy_port", kind: "scalar", localName: "proxy_port", T: 8 /*ScalarType.BOOL*/ },
            { no: 30, name: "trace_context", kind: "scalar", localName: "trace_context", T: 8 /*ScalarType.BOOL*/ },
            { no: 31, name: "sock_xlate_point", kind: "scalar", localName: "sock_xlate_point", T: 8 /*ScalarType.BOOL*/ },
            { no: 32, name: "socket_cookie", kind: "scalar", localName: "socket_cookie", T: 8 /*ScalarType.BOOL*/ },
            { no: 33, name: "cgroup_id", kind: "scalar", localName: "cgroup_id", T: 8 /*ScalarType.BOOL*/ },
            { no: 100000, name: "Summary", kind: "scalar", localName: "Summary", jsonName: "Summary", T: 8 /*ScalarType.BOOL*/ },
            { no: 150000, name: "extensions", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 21001, name: "egress_allowed_by", kind: "scalar", localName: "egress_allowed_by", T: 8 /*ScalarType.BOOL*/ },
            { no: 21002, name: "ingress_allowed_by", kind: "scalar", localName: "ingress_allowed_by", T: 8 /*ScalarType.BOOL*/ }
        ]);
    }
    create(value?: PartialMessage<FlowMask>): FlowMask {
        const message = globalThis.Object.create((this.messagePrototype!));
        message.uuid = false;
        message.verdict = false;
        message.drop_reason = false;
        message.auth_type = false;
        message.ethernet = false;
        message.IP = false;
        message.l4 = false;
        message.source = false;
        message.destination = false;
        message.Type = false;
        message.node_name = false;
        message.source_names = false;
        message.destination_names = false;
        message.l7 = false;
        message.reply = false;
        message.event_type = false;
        message.source_service = false;
        message.destination_service = false;
        message.traffic_direction = false;
        message.policy_match_type = false;
        message.trace_observation_point = false;
        message.drop_reason_desc = false;
        message.is_reply = false;
        message.debug_capture_point = false;
        message.interface = false;
        message.proxy_port = false;
        message.trace_context = false;
        message.sock_xlate_point = false;
        message.socket_cookie = false;
        message.cgroup_id = false;
        message.Summary = false;
        message.extensions = false;
        message.egress_allowed_by = false;
        message.ingress_allowed_by = false;
        if (value !== undefined)
            reflectionMergePartial<FlowMask>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: FlowMask): FlowMask {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* bool uuid */ 34:
                    message.uuid = reader.bool();
                    break;
                case /* bool verdict */ 2:
                    message.verdict = reader.bool();
                    break;
                case /* bool drop_reason */ 3:
                    message.drop_reason = reader.bool();
                    break;
                case /* bool auth_type */ 35:
                    message.auth_type = reader.bool();
                    break;
                case /* bool ethernet */ 4:
                    message.ethernet = reader.bool();
                    break;
                case /* bool IP = 5 [json_name = "IP"];*/ 5:
                    message.IP = reader.bool();
                    break;
                case /* bool l4 */ 6:
                    message.l4 = reader.bool();
                    break;
                case /* bool source */ 8:
                    message.source = reader.bool();
                    break;
                case /* bool destination */ 9:
                    message.destination = reader.bool();
                    break;
                case /* bool Type = 10 [json_name = "Type"];*/ 10:
                    message.Type = reader.bool();
                    break;
                case /* bool node_name */ 11:
                    message.node_name = reader.bool();
                    break;
                case /* bool source_names */ 13:
                    message.source_names = reader.bool();
                    break;
                case /* bool destination_names */ 14:
                    message.destination_names = reader.bool();
                    break;
                case /* bool l7 */ 15:
                    message.l7 = reader.bool();
                    break;
                case /* bool reply */ 16:
                    message.reply = reader.bool();
                    break;
                case /* bool event_type */ 19:
                    message.event_type = reader.bool();
                    break;
                case /* bool source_service */ 20:
                    message.source_service = reader.bool();
                    break;
                case /* bool destination_service */ 21:
                    message.destination_service = reader.bool();
                    break;
                case /* bool traffic_direction */ 22:
                    message.traffic_direction = reader.bool();
                    break;
                case /* bool policy_match_type */ 23:
                    message.policy_match_type = reader.bool();
                    break;
                case /* bool trace_observation_point */ 24:
                    message.trace_observation_point = reader.bool();
                    break;
                case /* bool drop_reason_desc */ 25:
                    message.drop_reason_desc = reader.bool();
                    break;
                case /* bool is_reply */ 26:
                    message.is_reply = reader.bool();
                    break;
                case /* bool debug_capture_point */ 27:
                    message.debug_capture_point = reader.bool();
                    break;
                case /* bool interface */ 28:
                    message.interface = reader.bool();
                    break;
                case /* bool proxy_port */ 29:
                    message.proxy_port = reader.bool();
                    break;
                case /* bool trace_context */ 30:
                    message.trace_context = reader.bool();
                    break;
                case /* bool sock_xlate_point */ 31:
                    message.sock_xlate_point = reader.bool();
                    break;
                case /* bool socket_cookie */ 32:
                    message.socket_cookie = reader.bool();
                    break;
                case /* bool cgroup_id */ 33:
                    message.cgroup_id = reader.bool();
                    break;
                case /* bool Summary = 100000 [json_name = "Summary"];*/ 100000:
                    message.Summary = reader.bool();
                    break;
                case /* bool extensions */ 150000:
                    message.extensions = reader.bool();
                    break;
                case /* bool egress_allowed_by */ 21001:
                    message.egress_allowed_by = reader.bool();
                    break;
                case /* bool ingress_allowed_by */ 21002:
                    message.ingress_allowed_by = reader.bool();
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
    internalBinaryWrite(message: FlowMask, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* bool uuid = 34; */
        if (message.uuid !== false)
            writer.tag(34, WireType.Varint).bool(message.uuid);
        /* bool verdict = 2; */
        if (message.verdict !== false)
            writer.tag(2, WireType.Varint).bool(message.verdict);
        /* bool drop_reason = 3; */
        if (message.drop_reason !== false)
            writer.tag(3, WireType.Varint).bool(message.drop_reason);
        /* bool auth_type = 35; */
        if (message.auth_type !== false)
            writer.tag(35, WireType.Varint).bool(message.auth_type);
        /* bool ethernet = 4; */
        if (message.ethernet !== false)
            writer.tag(4, WireType.Varint).bool(message.ethernet);
        /* bool IP = 5 [json_name = "IP"]; */
        if (message.IP !== false)
            writer.tag(5, WireType.Varint).bool(message.IP);
        /* bool l4 = 6; */
        if (message.l4 !== false)
            writer.tag(6, WireType.Varint).bool(message.l4);
        /* bool source = 8; */
        if (message.source !== false)
            writer.tag(8, WireType.Varint).bool(message.source);
        /* bool destination = 9; */
        if (message.destination !== false)
            writer.tag(9, WireType.Varint).bool(message.destination);
        /* bool Type = 10 [json_name = "Type"]; */
        if (message.Type !== false)
            writer.tag(10, WireType.Varint).bool(message.Type);
        /* bool node_name = 11; */
        if (message.node_name !== false)
            writer.tag(11, WireType.Varint).bool(message.node_name);
        /* bool source_names = 13; */
        if (message.source_names !== false)
            writer.tag(13, WireType.Varint).bool(message.source_names);
        /* bool destination_names = 14; */
        if (message.destination_names !== false)
            writer.tag(14, WireType.Varint).bool(message.destination_names);
        /* bool l7 = 15; */
        if (message.l7 !== false)
            writer.tag(15, WireType.Varint).bool(message.l7);
        /* bool reply = 16; */
        if (message.reply !== false)
            writer.tag(16, WireType.Varint).bool(message.reply);
        /* bool event_type = 19; */
        if (message.event_type !== false)
            writer.tag(19, WireType.Varint).bool(message.event_type);
        /* bool source_service = 20; */
        if (message.source_service !== false)
            writer.tag(20, WireType.Varint).bool(message.source_service);
        /* bool destination_service = 21; */
        if (message.destination_service !== false)
            writer.tag(21, WireType.Varint).bool(message.destination_service);
        /* bool traffic_direction = 22; */
        if (message.traffic_direction !== false)
            writer.tag(22, WireType.Varint).bool(message.traffic_direction);
        /* bool policy_match_type = 23; */
        if (message.policy_match_type !== false)
            writer.tag(23, WireType.Varint).bool(message.policy_match_type);
        /* bool trace_observation_point = 24; */
        if (message.trace_observation_point !== false)
            writer.tag(24, WireType.Varint).bool(message.trace_observation_point);
        /* bool drop_reason_desc = 25; */
        if (message.drop_reason_desc !== false)
            writer.tag(25, WireType.Varint).bool(message.drop_reason_desc);
        /* bool is_reply = 26; */
        if (message.is_reply !== false)
            writer.tag(26, WireType.Varint).bool(message.is_reply);
        /* bool debug_capture_point = 27; */
        if (message.debug_capture_point !== false)
            writer.tag(27, WireType.Varint).bool(message.debug_capture_point);
        /* bool interface = 28; */
        if (message.interface !== false)
            writer.tag(28, WireType.Varint).bool(message.interface);
        /* bool proxy_port = 29; */
        if (message.proxy_port !== false)
            writer.tag(29, WireType.Varint).bool(message.proxy_port);
        /* bool trace_context = 30; */
        if (message.trace_context !== false)
            writer.tag(30, WireType.Varint).bool(message.trace_context);
        /* bool sock_xlate_point = 31; */
        if (message.sock_xlate_point !== false)
            writer.tag(31, WireType.Varint).bool(message.sock_xlate_point);
        /* bool socket_cookie = 32; */
        if (message.socket_cookie !== false)
            writer.tag(32, WireType.Varint).bool(message.socket_cookie);
        /* bool cgroup_id = 33; */
        if (message.cgroup_id !== false)
            writer.tag(33, WireType.Varint).bool(message.cgroup_id);
        /* bool Summary = 100000 [json_name = "Summary"]; */
        if (message.Summary !== false)
            writer.tag(100000, WireType.Varint).bool(message.Summary);
        /* bool extensions = 150000; */
        if (message.extensions !== false)
            writer.tag(150000, WireType.Varint).bool(message.extensions);
        /* bool egress_allowed_by = 21001; */
        if (message.egress_allowed_by !== false)
            writer.tag(21001, WireType.Varint).bool(message.egress_allowed_by);
        /* bool ingress_allowed_by = 21002; */
        if (message.ingress_allowed_by !== false)
            writer.tag(21002, WireType.Varint).bool(message.ingress_allowed_by);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message timescape.v1.FlowMask
 */
export const FlowMask = new FlowMask$Type();
