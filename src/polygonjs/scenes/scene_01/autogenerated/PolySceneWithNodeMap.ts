
import {PolyScene} from '@polygonjs/polygonjs/src/engine/scene/PolyScene';
// obj
import {AreaLightObjNode} from '@polygonjs/polygonjs/src/engine/nodes/obj/AreaLight';
import {AudioListenerObjNode} from '@polygonjs/polygonjs/src/engine/nodes/obj/AudioListener';
import {EventsNetworkObjNode} from '@polygonjs/polygonjs/src/engine/nodes/obj/EventsNetwork';
import {GeoObjNode} from '@polygonjs/polygonjs/src/engine/nodes/obj/Geo';
import {HemisphereLightObjNode} from '@polygonjs/polygonjs/src/engine/nodes/obj/HemisphereLight';
import {NullObjNode} from '@polygonjs/polygonjs/src/engine/nodes/obj/Null';
import {PerspectiveCameraObjNode} from '@polygonjs/polygonjs/src/engine/nodes/obj/PerspectiveCamera';
import {PolarTransformObjNode} from '@polygonjs/polygonjs/src/engine/nodes/obj/PolarTransform';
import {PositionalAudioObjNode} from '@polygonjs/polygonjs/src/engine/nodes/obj/PositionalAudio';
import {SpotLightObjNode} from '@polygonjs/polygonjs/src/engine/nodes/obj/SpotLight';
// audio
import {AMSynthAudioNode} from '@polygonjs/polygonjs/src/engine/nodes/audio/AMSynth';
import {CopNetworkAudioNode} from '@polygonjs/polygonjs/src/engine/nodes/audio/CopNetwork';
import {EnvelopeAudioNode} from '@polygonjs/polygonjs/src/engine/nodes/audio/Envelope';
import {EventsNetworkAudioNode} from '@polygonjs/polygonjs/src/engine/nodes/audio/EventsNetwork';
import {FFTAudioNode} from '@polygonjs/polygonjs/src/engine/nodes/audio/FFT';
import {FileAudioNode} from '@polygonjs/polygonjs/src/engine/nodes/audio/File';
import {MeterAudioNode} from '@polygonjs/polygonjs/src/engine/nodes/audio/Meter';
import {NullAudioNode} from '@polygonjs/polygonjs/src/engine/nodes/audio/Null';
import {PlayInstrumentAudioNode} from '@polygonjs/polygonjs/src/engine/nodes/audio/PlayInstrument';
import {SamplerAudioNode} from '@polygonjs/polygonjs/src/engine/nodes/audio/Sampler';
import {UserMediaAudioNode} from '@polygonjs/polygonjs/src/engine/nodes/audio/UserMedia';
import {VolumeAudioNode} from '@polygonjs/polygonjs/src/engine/nodes/audio/Volume';
import {WaveformAudioNode} from '@polygonjs/polygonjs/src/engine/nodes/audio/Waveform';
// cop
import {AudioAnalyserCopNode} from '@polygonjs/polygonjs/src/engine/nodes/cop/AudioAnalyser';
import {EnvMapCopNode} from '@polygonjs/polygonjs/src/engine/nodes/cop/EnvMap';
import {ImageCopNode} from '@polygonjs/polygonjs/src/engine/nodes/cop/Image';
// event
import {AnimationEventNode} from '@polygonjs/polygonjs/src/engine/nodes/event/Animation';
import {CameraOrbitControlsEventNode} from '@polygonjs/polygonjs/src/engine/nodes/event/CameraOrbitControls';
import {DelayEventNode} from '@polygonjs/polygonjs/src/engine/nodes/event/Delay';
import {NodeCookEventNode} from '@polygonjs/polygonjs/src/engine/nodes/event/NodeCook';
import {PointerEventNode} from '@polygonjs/polygonjs/src/engine/nodes/event/Pointer';
import {RaycastEventNode} from '@polygonjs/polygonjs/src/engine/nodes/event/Raycast';
import {SceneEventNode} from '@polygonjs/polygonjs/src/engine/nodes/event/Scene';
import {SetParamEventNode} from '@polygonjs/polygonjs/src/engine/nodes/event/SetParam';
import {ThrottleEventNode} from '@polygonjs/polygonjs/src/engine/nodes/event/Throttle';
// sop
import {AnimationsNetworkSopNode} from '@polygonjs/polygonjs/src/engine/nodes/sop/AnimationsNetwork';
import {AttribCreateSopNode} from '@polygonjs/polygonjs/src/engine/nodes/sop/AttribCreate';
import {AttribDeleteSopNode} from '@polygonjs/polygonjs/src/engine/nodes/sop/AttribDelete';
import {BVHSopNode} from '@polygonjs/polygonjs/src/engine/nodes/sop/BVH';
import {BoxSopNode} from '@polygonjs/polygonjs/src/engine/nodes/sop/Box';
import {CircleSopNode} from '@polygonjs/polygonjs/src/engine/nodes/sop/Circle';
import {CopNetworkSopNode} from '@polygonjs/polygonjs/src/engine/nodes/sop/CopNetwork';
import {CopySopNode} from '@polygonjs/polygonjs/src/engine/nodes/sop/Copy';
import {DeleteSopNode} from '@polygonjs/polygonjs/src/engine/nodes/sop/Delete';
import {EventsNetworkSopNode} from '@polygonjs/polygonjs/src/engine/nodes/sop/EventsNetwork';
import {FileSopNode} from '@polygonjs/polygonjs/src/engine/nodes/sop/File';
import {FuseSopNode} from '@polygonjs/polygonjs/src/engine/nodes/sop/Fuse';
import {HierarchySopNode} from '@polygonjs/polygonjs/src/engine/nodes/sop/Hierarchy';
import {IcosahedronSopNode} from '@polygonjs/polygonjs/src/engine/nodes/sop/Icosahedron';
import {InstanceSopNode} from '@polygonjs/polygonjs/src/engine/nodes/sop/Instance';
import {JitterSopNode} from '@polygonjs/polygonjs/src/engine/nodes/sop/Jitter';
import {LineSopNode} from '@polygonjs/polygonjs/src/engine/nodes/sop/Line';
import {MaterialPropertiesSopNode} from '@polygonjs/polygonjs/src/engine/nodes/sop/MaterialProperties';
import {MaterialSopNode} from '@polygonjs/polygonjs/src/engine/nodes/sop/Material';
import {MaterialsNetworkSopNode} from '@polygonjs/polygonjs/src/engine/nodes/sop/MaterialsNetwork';
import {MergeSopNode} from '@polygonjs/polygonjs/src/engine/nodes/sop/Merge';
import {NullSopNode} from '@polygonjs/polygonjs/src/engine/nodes/sop/Null';
import {ObjectPropertiesSopNode} from '@polygonjs/polygonjs/src/engine/nodes/sop/ObjectProperties';
import {ParticlesSystemGpuSopNode} from '@polygonjs/polygonjs/src/engine/nodes/sop/ParticlesSystemGpu';
import {PlaneSopNode} from '@polygonjs/polygonjs/src/engine/nodes/sop/Plane';
import {RestAttributesSopNode} from '@polygonjs/polygonjs/src/engine/nodes/sop/RestAttributes';
import {ScatterSopNode} from '@polygonjs/polygonjs/src/engine/nodes/sop/Scatter';
import {SphereSopNode} from '@polygonjs/polygonjs/src/engine/nodes/sop/Sphere';
import {TransformSopNode} from '@polygonjs/polygonjs/src/engine/nodes/sop/Transform';
// mat
import {LineBasicBuilderMatNode} from '@polygonjs/polygonjs/src/engine/nodes/mat/LineBasicBuilder';
import {LineBasicMatNode} from '@polygonjs/polygonjs/src/engine/nodes/mat/LineBasic';
import {MeshBasicBuilderMatNode} from '@polygonjs/polygonjs/src/engine/nodes/mat/MeshBasicBuilder';
import {MeshBasicMatNode} from '@polygonjs/polygonjs/src/engine/nodes/mat/MeshBasic';
import {MeshLambertBuilderMatNode} from '@polygonjs/polygonjs/src/engine/nodes/mat/MeshLambertBuilder';
import {MeshPhongBuilderMatNode} from '@polygonjs/polygonjs/src/engine/nodes/mat/MeshPhongBuilder';
import {MeshPhongMatNode} from '@polygonjs/polygonjs/src/engine/nodes/mat/MeshPhong';
import {MeshPhysicalMatNode} from '@polygonjs/polygonjs/src/engine/nodes/mat/MeshPhysical';
import {MeshStandardBuilderMatNode} from '@polygonjs/polygonjs/src/engine/nodes/mat/MeshStandardBuilder';
import {PointsBuilderMatNode} from '@polygonjs/polygonjs/src/engine/nodes/mat/PointsBuilder';
// anim
import {DurationAnimNode} from '@polygonjs/polygonjs/src/engine/nodes/anim/Duration';
import {EasingAnimNode} from '@polygonjs/polygonjs/src/engine/nodes/anim/Easing';
import {MergeAnimNode} from '@polygonjs/polygonjs/src/engine/nodes/anim/Merge';
import {NullAnimNode} from '@polygonjs/polygonjs/src/engine/nodes/anim/Null';
import {PlayAnimNode} from '@polygonjs/polygonjs/src/engine/nodes/anim/Play';
import {PropertyNameAnimNode} from '@polygonjs/polygonjs/src/engine/nodes/anim/PropertyName';
import {PropertyValueAnimNode} from '@polygonjs/polygonjs/src/engine/nodes/anim/PropertyValue';
import {TargetAnimNode} from '@polygonjs/polygonjs/src/engine/nodes/anim/Target';

export class PolySceneWithNodeMap_scene_01 extends PolyScene {
	node(path: '/spotLight1'): SpotLightObjNode;
	node(path: '/audioListener1'): AudioListenerObjNode;
	node(path: '/areaLight1'): AreaLightObjNode;
	node(path: '/polarTransform1'): PolarTransformObjNode;
	node(path: '/hemisphereLight1'): HemisphereLightObjNode;
	node(path: '/null1'): NullObjNode;
	node(path: '/positionalAudio1'): PositionalAudioObjNode;
	node(path: '/positionalAudio1/envelope1'): EnvelopeAudioNode;
	node(path: '/positionalAudio1/AMSynth1'): AMSynthAudioNode;
	node(path: '/positionalAudio1/playInstrument1'): PlayInstrumentAudioNode;
	node(path: '/positionalAudio1/OUT'): NullAudioNode;
	node(path: '/positionalAudio1/userMedia1'): UserMediaAudioNode;
	node(path: '/positionalAudio1/meter1'): MeterAudioNode;
	node(path: '/positionalAudio1/volume1'): VolumeAudioNode;
	node(path: '/positionalAudio1/sampler1'): SamplerAudioNode;
	node(path: '/positionalAudio1/waveform1'): WaveformAudioNode;
	node(path: '/positionalAudio1/FFT_raw'): FFTAudioNode;
	node(path: '/positionalAudio1/FFT_asOctaves'): FFTAudioNode;
	node(path: '/positionalAudio1/file_main'): FileAudioNode;
	node(path: '/positionalAudio1/COP'): CopNetworkAudioNode;
	node(path: '/positionalAudio1/COP/audioAnalyser_FFT_raw'): AudioAnalyserCopNode;
	node(path: '/positionalAudio1/COP/audioAnalyser_FFT_asOctaves'): AudioAnalyserCopNode;
	node(path: '/positionalAudio1/eventsNetwork1'): EventsNetworkAudioNode;
	node(path: '/positionalAudio1/eventsNetwork1/scene1'): SceneEventNode;
	node(path: '/positionalAudio1/eventsNetwork1/setParam1'): SetParamEventNode;
	node(path: '/geo1'): GeoObjNode;
	node(path: '/geo1/box1'): BoxSopNode;
	node(path: '/geo1/sphere1'): SphereSopNode;
	node(path: '/geo1/material1'): MaterialSopNode;
	node(path: '/geo1/COP'): CopNetworkSopNode;
	node(path: '/geo1/COP/image1'): ImageCopNode;
	node(path: '/geo1/COP/envMap1'): EnvMapCopNode;
	node(path: '/geo1/MAT'): MaterialsNetworkSopNode;
	node(path: '/geo1/MAT/meshPhysical1'): MeshPhysicalMatNode;
	node(path: '/crowd'): GeoObjNode;
	node(path: '/crowd/plane1'): PlaneSopNode;
	node(path: '/crowd/scatter1'): ScatterSopNode;
	node(path: '/crowd/file1'): FileSopNode;
	node(path: '/crowd/instance1'): InstanceSopNode;
	node(path: '/crowd/hierarchy1'): HierarchySopNode;
	node(path: '/crowd/transform1'): TransformSopNode;
	node(path: '/crowd/transform2'): TransformSopNode;
	node(path: '/crowd/file2'): FileSopNode;
	node(path: '/crowd/delete1'): DeleteSopNode;
	node(path: '/crowd/delete2'): DeleteSopNode;
	node(path: '/crowd/hierarchy2'): HierarchySopNode;
	node(path: '/crowd/transform3'): TransformSopNode;
	node(path: '/crowd/transform4'): TransformSopNode;
	node(path: '/crowd/instance2'): InstanceSopNode;
	node(path: '/crowd/merge1'): MergeSopNode;
	node(path: '/crowd/merge2'): MergeSopNode;
	node(path: '/crowd/plane2'): PlaneSopNode;
	node(path: '/crowd/transform5'): TransformSopNode;
	node(path: '/crowd/transform6'): TransformSopNode;
	node(path: '/crowd/transform7'): TransformSopNode;
	node(path: '/crowd/transform8'): TransformSopNode;
	node(path: '/crowd/attribCreate1'): AttribCreateSopNode;
	node(path: '/crowd/copy1'): CopySopNode;
	node(path: '/crowd/copy2'): CopySopNode;
	node(path: '/crowd/scatter2'): ScatterSopNode;
	node(path: '/crowd/transform9'): TransformSopNode;
	node(path: '/crowd/material1'): MaterialSopNode;
	node(path: '/crowd/OUT'): NullSopNode;
	node(path: '/crowd/attribDelete1'): AttribDeleteSopNode;
	node(path: '/crowd/MAT'): MaterialsNetworkSopNode;
	node(path: '/crowd/MAT/meshPhong1'): MeshPhongMatNode;
	node(path: '/crowd/MAT/meshLambertBuilder_INSTANCES'): MeshLambertBuilderMatNode;
	node(path: '/crowd/MAT/meshStandardBuilder1'): MeshStandardBuilderMatNode;
	node(path: '/crowd/MAT/meshPhongBuilder_ground'): MeshPhongBuilderMatNode;
	node(path: '/crowd/material2'): MaterialSopNode;
	node(path: '/planeWithTexture'): GeoObjNode;
	node(path: '/planeWithTexture/plane1'): PlaneSopNode;
	node(path: '/planeWithTexture/material1'): MaterialSopNode;
	node(path: '/planeWithTexture/transform1'): TransformSopNode;
	node(path: '/planeWithTexture/COP'): CopNetworkSopNode;
	node(path: '/planeWithTexture/COP/image1'): ImageCopNode;
	node(path: '/planeWithTexture/COP/image2'): ImageCopNode;
	node(path: '/planeWithTexture/MAT'): MaterialsNetworkSopNode;
	node(path: '/planeWithTexture/MAT/meshBasic1'): MeshBasicMatNode;
	node(path: '/waveform'): GeoObjNode;
	node(path: '/waveform/line1'): LineSopNode;
	node(path: '/waveform/material1'): MaterialSopNode;
	node(path: '/waveform/attribCreate1'): AttribCreateSopNode;
	node(path: '/waveform/material3'): MaterialSopNode;
	node(path: '/waveform/transform1'): TransformSopNode;
	node(path: '/waveform/transform2'): TransformSopNode;
	node(path: '/waveform/merge1'): MergeSopNode;
	node(path: '/waveform/circle1'): CircleSopNode;
	node(path: '/waveform/merge2'): MergeSopNode;
	node(path: '/waveform/transform3'): TransformSopNode;
	node(path: '/waveform/material2'): MaterialSopNode;
	node(path: '/waveform/hierarchy1'): HierarchySopNode;
	node(path: '/waveform/transform4'): TransformSopNode;
	node(path: '/waveform/material4'): MaterialSopNode;
	node(path: '/waveform/transform5'): TransformSopNode;
	node(path: '/waveform/transform6'): TransformSopNode;
	node(path: '/waveform/hierarchy2'): HierarchySopNode;
	node(path: '/waveform/transform7'): TransformSopNode;
	node(path: '/waveform/merge3'): MergeSopNode;
	node(path: '/waveform/merge4'): MergeSopNode;
	node(path: '/waveform/MAT'): MaterialsNetworkSopNode;
	node(path: '/waveform/MAT/lineBasic_CIRCLE'): LineBasicMatNode;
	node(path: '/waveform/MAT/lineBasicBuilder_FFT_asOctaves_SPEED'): LineBasicBuilderMatNode;
	node(path: '/waveform/MAT/lineBasicBuilder_FFT_asOctaves_VALUE'): LineBasicBuilderMatNode;
	node(path: '/waveform/MAT/lineBasicBuilder_FFT_raw_VALUE'): LineBasicBuilderMatNode;
	node(path: '/particles'): GeoObjNode;
	node(path: '/particles/sphere2'): SphereSopNode;
	node(path: '/particles/instance1'): InstanceSopNode;
	node(path: '/particles/icosahedron1'): IcosahedronSopNode;
	node(path: '/particles/restAttributes1'): RestAttributesSopNode;
	node(path: '/particles/attribCreate1'): AttribCreateSopNode;
	node(path: '/particles/fuse1'): FuseSopNode;
	node(path: '/particles/jitter1'): JitterSopNode;
	node(path: '/particles/attribCreate2'): AttribCreateSopNode;
	node(path: '/particles/delete2'): DeleteSopNode;
	node(path: '/particles/box1'): BoxSopNode;
	node(path: '/particles/transform1'): TransformSopNode;
	node(path: '/particles/particlesSystemGpu1'): ParticlesSystemGpuSopNode;
	node(path: '/particles/MAT'): MaterialsNetworkSopNode;
	node(path: '/particles/MAT/pointsParticles'): PointsBuilderMatNode;
	node(path: '/particles/MAT/meshLambertBuilder_INSTANCES'): MeshLambertBuilderMatNode;
	node(path: '/particles/MAT/meshBasicBuilder_PARTICLES'): MeshBasicBuilderMatNode;
	node(path: '/particles/eventsNetwork1'): EventsNetworkSopNode;
	node(path: '/particles/eventsNetwork1/raycast1'): RaycastEventNode;
	node(path: '/particles/eventsNetwork1/pointer1'): PointerEventNode;
	node(path: '/particles/eventsNetwork1/setParam1'): SetParamEventNode;
	node(path: '/blackSphere'): GeoObjNode;
	node(path: '/blackSphere/sphere1'): SphereSopNode;
	node(path: '/blackSphere/material1'): MaterialSopNode;
	node(path: '/blackSphere/materialsNetwork1'): MaterialsNetworkSopNode;
	node(path: '/blackSphere/materialsNetwork1/meshBasic1'): MeshBasicMatNode;
	node(path: '/raycastTarget'): GeoObjNode;
	node(path: '/raycastTarget/plane1'): PlaneSopNode;
	node(path: '/raycastTarget/objectProperties1'): ObjectPropertiesSopNode;
	node(path: '/raycastTarget/sphere1'): SphereSopNode;
	node(path: '/raycastTarget/merge1'): MergeSopNode;
	node(path: '/raycastTarget/BVH1'): BVHSopNode;
	node(path: '/raycastTarget/materialProperties1'): MaterialPropertiesSopNode;
	node(path: '/perspectiveCamera_DEBUG'): PerspectiveCameraObjNode;
	node(path: '/perspectiveCamera_DEBUG/events1'): EventsNetworkSopNode;
	node(path: '/perspectiveCamera_DEBUG/events1/cameraOrbitControls1'): CameraOrbitControlsEventNode;
	node(path: '/perspectiveCamera_MAIN'): PerspectiveCameraObjNode;
	node(path: '/perspectiveCamera_MAIN/eventsNetwork1'): EventsNetworkSopNode;
	node(path: '/perspectiveCamera_MAIN/eventsNetwork1/raycast1'): RaycastEventNode;
	node(path: '/perspectiveCamera_MAIN/eventsNetwork1/pointer1'): PointerEventNode;
	node(path: '/perspectiveCamera_MAIN/eventsNetwork1/throttle1'): ThrottleEventNode;
	node(path: '/perspectiveCamera_MAIN/eventsNetwork1/animation1'): AnimationEventNode;
	node(path: '/perspectiveCamera_MAIN/animationsNetwork1'): AnimationsNetworkSopNode;
	node(path: '/perspectiveCamera_MAIN/animationsNetwork1/duration1'): DurationAnimNode;
	node(path: '/perspectiveCamera_MAIN/animationsNetwork1/easing1'): EasingAnimNode;
	node(path: '/perspectiveCamera_MAIN/animationsNetwork1/target1'): TargetAnimNode;
	node(path: '/perspectiveCamera_MAIN/animationsNetwork1/propertyName1'): PropertyNameAnimNode;
	node(path: '/perspectiveCamera_MAIN/animationsNetwork1/propertyValue1'): PropertyValueAnimNode;
	node(path: '/perspectiveCamera_MAIN/animationsNetwork1/propertyValue2'): PropertyValueAnimNode;
	node(path: '/perspectiveCamera_MAIN/animationsNetwork1/END'): NullAnimNode;
	node(path: '/perspectiveCamera_MAIN/animationsNetwork1/START'): NullAnimNode;
	node(path: '/perspectiveCamera_MAIN/animationsNetwork1/PLAY'): PlayAnimNode;
	node(path: '/perspectiveCamera_MAIN/animationsNetwork1/duration2'): DurationAnimNode;
	node(path: '/perspectiveCamera_MAIN/animationsNetwork1/propertyName2'): PropertyNameAnimNode;
	node(path: '/perspectiveCamera_MAIN/animationsNetwork1/propertyValue3'): PropertyValueAnimNode;
	node(path: '/perspectiveCamera_MAIN/animationsNetwork1/propertyValue4'): PropertyValueAnimNode;
	node(path: '/perspectiveCamera_MAIN/animationsNetwork1/merge1'): MergeAnimNode;
	node(path: '/perspectiveCamera_MAIN/animationsNetwork1/duration3'): DurationAnimNode;
	node(path: '/perspectiveCamera_MAIN/animationsNetwork1/merge2'): MergeAnimNode;
	node(path: '/env'): GeoObjNode;
	node(path: '/env/sphere1'): SphereSopNode;
	node(path: '/env/material1'): MaterialSopNode;
	node(path: '/env/transform1'): TransformSopNode;
	node(path: '/env/plane1'): PlaneSopNode;
	node(path: '/env/material2'): MaterialSopNode;
	node(path: '/env/MAT'): MaterialsNetworkSopNode;
	node(path: '/env/MAT/meshBasic1'): MeshBasicMatNode;
	node(path: '/env/MAT/meshBasicBuilder1'): MeshBasicBuilderMatNode;
	node(path: '/env/COP'): CopNetworkSopNode;
	node(path: '/env/COP/image1'): ImageCopNode;
	node(path: '/eventsNetwork_light_shadow'): EventsNetworkObjNode;
	node(path: '/eventsNetwork_light_shadow/nodeCook1'): NodeCookEventNode;
	node(path: '/eventsNetwork_light_shadow/setParam1'): SetParamEventNode;
	node(path: '/eventsNetwork_light_shadow/delay1'): DelayEventNode;
	node(path: '/eventsNetwork_light_shadow/setParam2'): SetParamEventNode;
	node(path: '/eventsNetwork_light_shadow/scene1'): SceneEventNode;
	node(path: string):any /* we need any for now as otherwise an error occurs when adding plugins to the overloaded methods */ {
		return super.node(path);
	}
}
